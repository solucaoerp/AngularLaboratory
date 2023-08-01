import { Injectable } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';

const LS_CHAVE: string = 'persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  findById(id: number): Person | undefined {
    // Obtém a lista completa de pessoas
    const persons: Person[] = this.findAll();

    // Efetua a busca
    // find() : retorna o primeiro elemento da lista que satisfaz a condição, caso contrário, undefined
    return persons.find(person => person.id === id);
  }

  findAll(): Person[] {
    const persons = localStorage[LS_CHAVE];

    // Precisa do condicional, pois retorna undefined se a chave não existir
    return persons ? JSON.parse(persons) : [];
  }

  save(person: Person): void {

    // Obtém a lista completa de pessoas
    const persons = this.findAll();

    // Seta o ID único
    // Para não precisar gerenciar, será usado o Timestamp
    // Quantidade de segundos desde 1970
    person.id = new Date().getTime();

    // Adiciona no final da lista
    persons.push(person);

    // Armazena no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(persons);
  }

  update(person: Person): void {
    // Obtém a lista completa de pessoas
    const persons: Person[] = this.findAll();

    // Varre a lista de pessoas
    // Quando encontra a pessoa com o mesmo id, altera a lista
    persons.forEach(
      (obj, index, objs) => {
        if (person.id === obj.id) {
          objs[index] = person;
        }
      }
    );

    // Armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(persons);
  }

  delete(id: number): void {
    // Obtém a lista completa de pessoas
    // Feito com let para poder ser alterada
    let persons: Person[] = this.findAll();

    // filter(): retorna a mesma lista, com os registros que 
    //           satisfazem a condição, isto é, cujo
    //           id é diferente do passado na função
    // retorno todos, exceto o registro com id informado via parametro
    persons = persons.filter(person => person.id !== id);

    // Armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(persons);
  }

}
