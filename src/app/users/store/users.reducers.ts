import { UsersState } from './users-state.model';
import * as UsersActions from './users.actions';
import { User } from '../user.model';

const initialState = new UsersState();

export function UsersReducers(
    state = initialState,
    action: UsersActions.UsersActions
) {
    switch (action.type) {
        case UsersActions.SET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case UsersActions.ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };
        case UsersActions.SELECT_USER:
            return {
                ...state,
                selected: action.payload
            };
        case UsersActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case UsersActions.EDIT_USER:
            const userIndex = state.users.findIndex(
                (sUser: User) => sUser.id === action.payload.id
            );
            const users = [...state.users];
            users[userIndex] = action.payload;
            return {
                ...state,
                users: users
            };
        case UsersActions.DELETE_USER:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
    return state;
}
