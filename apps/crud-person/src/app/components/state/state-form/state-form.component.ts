import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StateService } from 'src/app/services';
import { State } from 'src/app/shared/models';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css']
})
export class StateFormComponent implements OnInit {

  @ViewChild("formStates") formStates!: NgForm;
  state!: State;
  isNew: boolean = true;

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.isNew = false;
      const res = this.stateService.getById(id);
      if (res !== undefined) {
        this.state = res;
      }
      else {
        throw new Error("Estado não encontrada: id = " + id);
      }
    } else {
      this.isNew = true;
      this.state = {}; // Cria uma instância vazia
    }
  }

  save(): void {
    if (this.formStates.form.valid) {
      if (this.isNew) {
        this.stateService.create(this.state);
      } else {
        this.stateService.update(this.state);
      }
      this.router.navigate(['/states']);
    }
  }
}