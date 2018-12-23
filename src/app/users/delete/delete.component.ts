import { UsersService } from './../users.service';
import { User } from './../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
    @Input()
    btnType = 'collapsed';

    @Input()
    user: User;

    constructor(
        private modalService: NgbModal,
        private usersService: UsersService
    ) {}

    ngOnInit() {}

    open(content) {
        this.modalService.open(content);
    }

    delete() {
        this.usersService
            .deleteUser(this.user)
            .subscribe(() => this.modalService.dismissAll());
    }
}
