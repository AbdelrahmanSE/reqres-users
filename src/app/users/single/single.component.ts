import { User } from './../user.model';
import * as UsersActions from './../store/users.actions';
import { UsersState } from './../store/users-state.model';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
    @Input()
    user: User;

    constructor(private store: Store<UsersState>) {}

    ngOnInit() {}

    close() {
        this.store.dispatch(new UsersActions.SelectUser(null));
    }
}
