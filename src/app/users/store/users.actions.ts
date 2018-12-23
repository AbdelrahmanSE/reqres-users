import { User } from './../user.model';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) {}
}

export class SetUsers implements Action {
    readonly type = SET_USERS;
    constructor(public payload: User[]) {}
}

export type UsersActions = SetUsers | AddUser;
