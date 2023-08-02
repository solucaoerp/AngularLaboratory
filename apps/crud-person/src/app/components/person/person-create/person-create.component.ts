import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PersonService } from 'src/app/services/person/person.service';
import { Person } from 'src/app/shared/models/person.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  @ViewChild('formPerson') formPerson!: NgForm;
  person!: Person;

  constructor(
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Cria uma instância vazia para não dar erro de referência
    this.person = new Person();
  }

  save(): void {
    if (this.formPerson.form.valid) {
      this.personService.save(this.person);
      this.router.navigate(["/persons"]);
    }
  }


}
