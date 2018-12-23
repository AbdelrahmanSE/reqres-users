import { UsersState } from './users-state.model';
import * as UsersActions from './users.actions';

const initialState: UsersState = {
    users: []
};

export function UsersReducers(
    state = initialState,
    action: UsersActions.UsersActions
) {
    switch (action.type) {
        case UsersActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case UsersActions.SET_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
    return state;
}
