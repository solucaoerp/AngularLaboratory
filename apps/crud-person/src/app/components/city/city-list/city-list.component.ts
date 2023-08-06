import { Component, OnInit } from '@angular/core';

import { CityService } from 'src/app/services/city/city.service';
import { City } from 'src/app/shared/models/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.findAll();
  }

  findAll(): City[] {
    return this.cityService.getAll();
  }

  delete($event: any, city: City): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o registro ${city.nome}?`)) {
      this.cityService.delete(city.id!);
      this.cities = this.findAll();
    }
  }
}
