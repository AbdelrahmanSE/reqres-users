import * as UsersActions from './store/users.actions';
import { AppConfig } from './../app.config';
import { HttpClient } from '@angular/common/http';
import { UsersState } from './store/users-state.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    currentPage: number;
    total: number;
    requestSent: boolean;

    constructor(
        private httpClient: HttpClient,
        private store: Store<UsersState>
    ) {}

    importUsers(page = 1) {
        // Checks if a request was sent and so not send another request
        if (this.requestSent) {
            return new Observable<User[]>();
        }
        this.requestSent = true;

        const request = this.httpClient.get(
            AppConfig.REST_ROUTE + '/users?page=' + page
        );
        request.subscribe((payload: any) => {
            this.requestSent = false;
            this.total = payload.total_pages;
            this.currentPage = payload.page;
            this.store.dispatch(new UsersActions.SetUsers(payload.data));
        });
        return request;
    }

    addUsers() {
        // Checks if a request was sent and so not send another request
        if (this.currentPage >= this.total || this.requestSent) {
            return new Observable<User[]>();
        }
        this.requestSent = true;

        const request = this.httpClient.get(
            AppConfig.REST_ROUTE +
                '/users?page=' +
                (this.currentPage + 1).toString()
        );
        request.subscribe((payload: any) => {
            this.requestSent = false;
            this.total = payload.total_pages;
            this.currentPage = payload.page;
            this.store.dispatch(new UsersActions.AddUsers(payload.data));
        });
        return request;
    }

    getUser(id) {
        const request = this.httpClient.get(
            AppConfig.REST_ROUTE + '/users/' + id
        );
        return request;
    }

    addUser(fullname, jobtitle) {
        const name = fullname.split(' ');

        const first_name = name[0] ? name[0] : '';
        const last_name = name[1] ? name[1] : '';

        const request = this.httpClient.post(AppConfig.REST_ROUTE + '/users/', {
            name: fullname,
            job: jobtitle
        });
        request.subscribe((payload: any) => {
            const id = payload.id;
            const user = new User(id, first_name, last_name, jobtitle, '');
            this.store.dispatch(new UsersActions.AddUser(user));
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

    deleteUser(user: User) {
        const request = this.httpClient.delete(
            AppConfig.REST_ROUTE + '/users/' + user.id
        );
        request.subscribe((payload: any) => {
            this.store.dispatch(new UsersActions.DeleteUser(user));
        });
        return request;
    }
}
