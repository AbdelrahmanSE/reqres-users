import { User } from './../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
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

    edit(form: NgForm) {
        this.usersService
            .editUser(this.user, form.value.name, form.value.jobtitle)
            .subscribe(() => this.modalService.dismissAll());
    }
}
