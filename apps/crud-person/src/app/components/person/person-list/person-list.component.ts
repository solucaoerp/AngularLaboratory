import { Component, Input, OnInit } from '@angular/core';

import { PersonService } from 'src/app/services/person/person.service';
import { Person } from 'src/app/shared/models/person.model';

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
    return this.personService.findAll();
  }

  delete($event: any, person: Person): void {
    $event.preventDefault(); // altera o comportamento padrao do href(link), mantendo-se na página
    if (confirm(`Deseja realmente remover a pessoa ${person.nome}?`)) {
      this.personService.delete(person.id!);
      this.persons = this.findAll();
    }
  }
}