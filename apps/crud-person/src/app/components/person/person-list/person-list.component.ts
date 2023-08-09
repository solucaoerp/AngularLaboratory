import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PersonService } from 'src/app/services';
import { Person } from 'src/app/shared/models';
import { PersonModalComponent } from '../person-modal/person-modal.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.persons = this.findAll();
  }

  findAll(): Person[] {
    return this.personService.getAllPersons();
  }

  delete($event: any, person: Person): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${person.nome}?`)) {
      this.personService.deletePerson(person.id!);
      this.persons = this.findAll();
    }
  }

  abrirModalPessoa(person: Person) {
    const modalRef = this.modalService.open(PersonModalComponent);
    modalRef.componentInstance.person = person;
  }
}