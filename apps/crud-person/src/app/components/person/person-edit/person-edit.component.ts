import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from 'src/app/services/person/person.service';
import { Person } from 'src/app/shared/models/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  @ViewChild("formPerson") formPerson!: NgForm;
  person!: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];

    // com o id, obtém a pessoa
    const res = this.personService.findById(id);
    if (res !== undefined) {
      this.person = res;
    }
    else {
      throw new Error("Pessoa não encontrada: id = " + id);
    }
  }

  update(): void {
    // verifica se o formulário é válido
    if (this.formPerson.form.valid) {
      // Efetivamente atualiza a pessoa
      this.personService.update(this.person);
      // Redireciona para /persons/list
      this.router.navigate(['/persons']);
    }
  }
}