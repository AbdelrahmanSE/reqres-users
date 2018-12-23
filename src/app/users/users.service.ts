import * as UsersActions from './store/users.actions';
import { AppConfig } from './../app.config';
import { HttpClient } from '@angular/common/http';
import { UsersState } from './store/users-state.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        private httpClient: HttpClient,
        private store: Store<UsersState>
    ) {}

    importUsers(page = 1) {
        const request = this.httpClient.get(
            AppConfig.REST_ROUTE + '/users?page=' + page
        );
        request.subscribe((payload: any) => {
            this.store.dispatch(new UsersActions.SetUsers(payload.data));
        });
        return request;
    }

    editUser(user: User, fullname, jobtitle) {
        const name = fullname.split(' ');

        user.first_name = name[0] ? name[0] : '';
        user.last_name = name[1] ? name[1] : '';
        user.jobtitle = jobtitle;

        const request = this.httpClient.patch(
            AppConfig.REST_ROUTE + '/users/' + user.id,
            {
                name: fullname,
                job: jobtitle
            }
        );
        request.subscribe((payload: any) => {
            this.store.dispatch(new UsersActions.EditUser(user));
        });
        return request;
    }
}
