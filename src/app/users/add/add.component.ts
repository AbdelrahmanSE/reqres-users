import { UsersService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    constructor(
        private modalService: NgbModal,
        private usersService: UsersService
    ) {}

    ngOnInit() {}

    open(content) {
        this.modalService.open(content);
    }

    add(form: NgForm) {
        this.usersService
            .addUser(form.value.name, form.value.jobtitle)
            .subscribe(() => this.modalService.dismissAll());
    }
}
