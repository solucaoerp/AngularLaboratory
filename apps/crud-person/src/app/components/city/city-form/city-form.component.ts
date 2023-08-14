import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CityService, StateService } from 'src/app/services';
import { City, State } from 'src/app/shared/models';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  @ViewChild("formCity") formCity!: NgForm;
  city!: City;
  isNew: boolean = true;
  states: State[] = [];

  constructor(
    private cityService: CityService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.states = this.stateService.getAll();

    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.isNew = false;
      const res = this.cityService.getById(id);
      if (res !== undefined) {
        this.city = res;
      }
      else {
        throw new Error("Cidade não encontrada: id = " + id);
      }
    } else {
      this.isNew = true;
      this.city = {};
    }
  }

  save(): void {
    if (this.formCity.form.valid) {
      if (this.isNew) {
        this.cityService.create(this.city);
      } else {
        this.cityService.update(this.city);
      }
      this.router.navigate(['/cities']);
    }
  }

}
