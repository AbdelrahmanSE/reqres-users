import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input()
  btnType = 'collapsed';

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content) {
    this.modalService.open(content);
  }
}
