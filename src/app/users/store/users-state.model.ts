import { User } from './../user.model';

/**
 * Class for the Users State
 */
export class UsersState {
    users: User[];
    selected: User | null;
}
