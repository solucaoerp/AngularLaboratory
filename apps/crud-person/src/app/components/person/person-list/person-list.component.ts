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
    //throw new Error('Method not implemented.');
    this.persons = this.findAll();
  }

  findAll(): Person[] {
    //return this.personService.findAll();
    return [
      new Person(1, "Prof. Razer", 20),
      new Person(2, "Charles Borgs", 34),
      new Person(3, "Manoel Floriano", 55),
      new Person(4, "Juan Costa e Silva", 68),
      new Person(5, "Mônica Juliene", 52)
    ]
  }

}
