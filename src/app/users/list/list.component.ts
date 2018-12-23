import * as UsersActions from './../store/users.actions';
import { UsersService } from './../users.service';
import { UsersState } from './../store/users-state.model';
import { Store } from '@ngrx/store';
import { User } from './../user.model';
import {
    Component,
    OnInit,
    HostListener,
    ViewChild,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    constructor(
        private usersService: UsersService,
        private store: Store<UsersState>
    ) {}
    users: User[];
    selected: User;

    @ViewChild('userContainer') userContainer: ElementRef;

    ngOnInit() {
        this.usersService.importUsers();
        this.store.select('Users').subscribe(users => {
            this.users = users.users;
            this.selected = users.selected;
            this.onScroll();
        });
    }

    selectUser(user: User) {
        this.store.dispatch(new UsersActions.SelectUser(user));
    }

    @HostListener('scroll', [])
    onScroll(): void {
        console.log(
            this.userContainer.nativeElement.scrollHeight -
                this.userContainer.nativeElement.clientHeight,
            this.userContainer.nativeElement.scrollTop
        );
        if (
            this.users &&
            this.userContainer.nativeElement.scrollHeight -
                this.userContainer.nativeElement.clientHeight <
                30 + this.userContainer.nativeElement.scrollTop
        ) {
            // Load Your Data Here
            this.usersService.addUsers();
        }
    }
}
