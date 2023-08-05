import { Component, OnInit } from '@angular/core';

import { StateService } from 'src/app/services/state/state.service';
import { State } from 'src/app/shared/models/state.model';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  states: State[] = [];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.states = this.findAll();
  }

  findAll(): State[] {
    return this.stateService.getAll();
  }

  delete($event: any, state: State): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o registro ${state.nome}?`)) {
      this.stateService.delete(state.id!);
      this.states = this.findAll();
    }
  }
}
