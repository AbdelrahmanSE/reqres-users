import { UsersState } from './users-state.model';
import * as UsersActions from './users.actions';

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
            return {
                ...state,
                users: action.payload
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
