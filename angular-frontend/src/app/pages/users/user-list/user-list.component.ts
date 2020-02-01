import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../service/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

    constructor(private userService: UsersService) {
    }

    ngOnInit() {
        // Here plan is to get users and linked it with display source (table)
        this.userService.list();
    }

}
