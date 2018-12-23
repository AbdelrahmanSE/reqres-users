import * as UsersActions from './store/users.actions';
import { AppConfig } from './../app.config';
import { HttpClient } from '@angular/common/http';
import { UsersState } from './store/users-state.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class UsersService {
    constructor(
        private httpClient: HttpClient,
        private store: Store<UsersState>
    ) {}

    importUsers(page = 1) {
        this.httpClient
            .get(AppConfig.REST_ROUTE + '/users?page=' + page)
            .subscribe((payload: any) => {
                this.store.dispatch(new UsersActions.SetUsers(payload.data));
            });
    }
}
