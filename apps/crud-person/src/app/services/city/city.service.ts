import { Injectable } from '@angular/core';

import { City } from 'src/app/shared/models/city.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private LS_KEY: string = 'cities';

  constructor(private localStorageService: LocalStorageService) { }

  getById(id: number): City | undefined {
    const city: City[] = this.getAll();
    return city.find(city => city.id === id);
  }

  getAll(): City[] {
    return this.localStorageService.getItem(this.LS_KEY) || [];
  }

  create(city: City): void {
    const cities = this.getAll();

    city.id = new Date().getTime();

    cities.push(city);

    this.localStorageService.setItem(this.LS_KEY, cities);
  }

  update(city: City): void {
    const cities: City[] = this.getAll();
    const index = cities.findIndex(p => p.id === city.id);

    if (index !== -1) {
      cities[index] = city;
      this.localStorageService.setItem(this.LS_KEY, cities);
    }
  }

  delete(id: number): void {
    let cities: City[] = this.getAll();

    cities = cities.filter(person => person.id !== id);

    this.localStorageService.setItem(this.LS_KEY, cities);
  }
}