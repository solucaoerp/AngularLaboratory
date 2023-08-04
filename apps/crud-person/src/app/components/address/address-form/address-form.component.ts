import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AddressService } from 'src/app/services/address/address.service';
import { Address } from 'src/app/shared/models/address.model';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  @ViewChild("formAddress") formAddress!: NgForm;
  address!: Address;
  isNew: boolean = true;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    if (id) {
      this.isNew = false;
      const res = this.addressService.getById(id);
      if (res !== undefined) {
        this.address = res;
      }
      else {
        throw new Error("Pessoa não encontrada: id = " + id);
      }
    } else {
      this.isNew = true;
      this.address = {}; // Cria uma instância vazia
    }
  }

  save(): void {
    if (this.formAddress.form.valid) {
      if (this.isNew) {
        this.addressService.create(this.address);
      } else {
        this.addressService.update(this.address);
      }
      this.router.navigate(['/addresses']);
    }
  }

}
