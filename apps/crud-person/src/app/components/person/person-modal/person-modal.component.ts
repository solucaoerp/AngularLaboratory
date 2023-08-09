import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Person } from 'src/app/shared/models';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.css']
})
export class PersonModalComponent implements OnInit {

  @Input() person!: Person;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }

}