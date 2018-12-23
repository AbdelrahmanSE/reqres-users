import * as UsersActions from './../store/users.actions';
import { UsersService } from './../users.service';
import { UsersState } from './../store/users-state.model';
import { Store } from '@ngrx/store';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    constructor(
        private usersService: UsersService,
        private store: Store<UsersState>
    ) {}
    users: User[];
    selected: User;

    ngOnInit() {
        this.usersService.importUsers();
        this.store
            .select('Users')
            .subscribe(users => {
                this.users = users.users;
                this.selected = users.selected;
            });
    }

    selectUser(user: User) {
        this.store.dispatch(new UsersActions.SelectUser(user));
    }
}
