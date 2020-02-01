import {ArrayMinSize, IsArray, MinLength} from 'class-validator';
import {Injectable} from 'injection-js';
import * as uuid from 'uuid';
import {Qualification, User} from './user-repository.service';
import moment = require('moment');

export class MergeUsers {
    @IsArray()
    @ArrayMinSize(2)
    ids: string[] = [];
}

@Injectable()
export class UserMerger {
    public merge(users: User[]): User {
        if (users.length === 0) throw new Error('Error');
        if (users.length === 1) return users[0];

        const result: User = {firstName: '', qualifications: [], lastName: '', id: uuid.v4()};

        // filter users with initials and get their qualifications
        users.filter((user: User) => {
            const initialsRegex: RegExp = new RegExp('^[a-zA-Z]?.{1,2}$');
            // get all qualifications better performance than additional loops
            result.qualifications.push(...user.qualifications);
            return (initialsRegex.test(user.firstName) && initialsRegex.test(user.lastName));
        });

        const usersWithoutInitials = users.filter((user: User) => {
            const initialsRegex: RegExp = new RegExp('^[a-zA-Z]?.{1,2}$');
            return !(initialsRegex.test(user.firstName) && initialsRegex.test(user.lastName));
        });

        result.firstName = usersWithoutInitials[0].firstName;
        result.lastName = usersWithoutInitials[0].lastName;


        // basically detects same qualifications with different expiry date and set later one for both qualifications
        result.qualifications.map((qualification, index, arr) => {
            if (qualification.expiry !== null) {
                const other: Qualification | undefined = arr.find((q, jndex, arr2) => jndex !== index && q.expiry !== null && qualification.type === q.type && qualification.uniqueId === q.uniqueId);
                if (other) {
                    qualification.expiry = (moment(qualification.expiry).isBefore(moment(other.expiry as string))) ? other.expiry : qualification.expiry;
                }
            } else {
                return;
            }
        });

        // filter duplicates and set new UUID for everyone
        result.qualifications = result.qualifications.filter((thing, index, self) =>
            self.findIndex((t) => t.uniqueId === thing.uniqueId && t.expiry === thing.expiry) === index);
        result.qualifications.map((qualification) => {
            qualification.id = uuid.v4();
            return qualification;
        });

        return result;
    }

}
