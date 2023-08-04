import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { State } from 'src/app/shared/models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private LS_KEY: string = 'states';

  constructor(private localStorageService: LocalStorageService) { }

  getById(id: number): State | undefined {
    const states: State[] = this.getAll();
    return states.find(state => state.id === id);
  }

  getAll(): State[] {
    return this.localStorageService.getItem(this.LS_KEY) || [];
  }

  create(state: State): void {
    const states = this.getAll();

    state.id = new Date().getTime();

    states.push(state);

    this.localStorageService.setItem(this.LS_KEY, states);
  }

  update(state: State): void {
    const states: State[] = this.getAll();
    const index = states.findIndex(p => p.id === state.id);

    if (index !== -1) {
      states[index] = state;
      this.localStorageService.setItem(this.LS_KEY, states);
    }
  }

  delete(id: number): void {
    let states: State[] = this.getAll();

    states = states.filter(state => state.id !== id);

    this.localStorageService.setItem(this.LS_KEY, states);
  }
}