import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../service/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.sass']
})
export class UserViewComponent implements OnInit {

    private userId;

    constructor(private userService: UsersService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.userId = params.id;
        });
    }

    ngOnInit() {
        this.userService.getById(this.userId);
    }

}
