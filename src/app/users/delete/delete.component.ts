import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input()
  btnType = 'collapsed';

  constructor() { }

  ngOnInit() {
  }

}
