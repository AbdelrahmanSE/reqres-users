import { User } from './../user.model';
import { Action } from '@ngrx/store';

/**
 * NgRX Actions
 */

export const SET_USERS = 'SET_USERS';
export const ADD_USERS = 'ADD_USERS';
export const SELECT_USER = 'SELECT_USER';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export class SetUsers implements Action {
    readonly type = SET_USERS;
    constructor(public payload: User[]) {}
}

export class AddUsers implements Action {
    readonly type = ADD_USERS;
    constructor(public payload: User[]) {}
}

export class SelectUser implements Action {
    readonly type = SELECT_USER;
    constructor(public payload: User) {}
}

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) {}
}

export class EditUser implements Action {
    readonly type = EDIT_USER;
    constructor(public payload: User) {}
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: User) {}
}


export type UsersActions = SetUsers | AddUsers | SelectUser | AddUser | EditUser | DeleteUser;
