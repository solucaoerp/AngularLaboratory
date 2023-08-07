import { Component, Input, OnInit } from '@angular/core';

import { PersonService } from 'src/app/services';
import { Person } from 'src/app/shared/models';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.findAll();
  }

  findAll(): Person[] {
    return this.personService.getAllPersons();
  }

  delete($event: any, person: Person): void {
    $event.preventDefault(); // usado para prevenir o comportamento padrão de um evento
    if (confirm(`Deseja realmente remover a pessoa ${person.nome}?`)) {
      this.personService.deletePerson(person.id!);
      this.persons = this.findAll();
    }
  }
}