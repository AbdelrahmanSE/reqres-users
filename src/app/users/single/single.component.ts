import { User } from './../user.model';
import * as UsersActions from './../store/users.actions';
import { UsersState } from './../store/users-state.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
    user = User;

    constructor(private store: Store<UsersState>) {}

    ngOnInit() {
        this.store.select('Users').subscribe(users => {
            this.user = users.selected;
        });
    }

    close() {
        this.store.dispatch(new UsersActions.SelectUser(null));
    }
}
