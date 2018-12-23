import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-add",
    templateUrl: "./add.component.html",
    styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
    constructor(private modalService: NgbModal) {}

    ngOnInit() {}

    open(content) {
        this.modalService.open(content);
    }
}
