import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from 'src/app/services';
import { Person } from 'src/app/shared/models';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @ViewChild("formPerson") formPerson!: NgForm;
  person!: Person;
  isNew: boolean = true;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.isNew = false;
      const res = this.personService.getPersonById(id);
      if (res !== undefined) {
        this.person = res;
      }
      else {
        throw new Error("Pessoa não encontrada: id = " + id);
      }
    } else {
      this.isNew = true;
      this.person = {
        nome: '',
        dataNascimento: '',
        idade: null
      };
    }
  }

  save(): void {
    if (this.formPerson.form.valid) {
      if (this.isNew) {
        this.personService.createPerson(this.person);
      } else {
        this.personService.updatePerson(this.person);
      }
      this.router.navigate(['/persons']);
    }
  }
}
