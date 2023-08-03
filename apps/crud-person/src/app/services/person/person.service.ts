import { Injectable } from '@angular/core';

import { Person } from 'src/app/shared/models/person.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private LS_KEY: string = 'persons';

  constructor(private localStorageService: LocalStorageService) { }

  getPersonById(id: number): Person | undefined {
    const persons: Person[] = this.getAllPersons();
    return persons.find(person => person.id === id);
  }

  getAllPersons(): Person[] {
    return this.localStorageService.getItem(this.LS_KEY) || [];
  }

  createPerson(person: Person): void {
    const persons = this.getAllPersons();

    person.id = new Date().getTime();

    persons.push(person);

    this.localStorageService.setItem(this.LS_KEY, persons);
  }

  updatePerson(person: Person): void {
    const persons: Person[] = this.getAllPersons();
    const index = persons.findIndex(p => p.id === person.id);

    if (index !== -1) {
      persons[index] = person;
      this.localStorageService.setItem(this.LS_KEY, persons);
    }
  }

  deletePerson(id: number): void {
    let persons: Person[] = this.getAllPersons();

    persons = persons.filter(person => person.id !== id);

    this.localStorageService.setItem(this.LS_KEY, persons);
  }
}