import { Component, OnInit } from '@angular/core';

import { AddressService } from 'src/app/services/address/address.service';
import { Address } from 'src/app/shared/models/address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addresses = this.findAll();
  }

  findAll(): Address[] {
    return this.addressService.getAll();
  }

  delete($event: any, address: Address): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o registro ${address.rua}?`)) {
      this.addressService.delete(address.id!);
      this.addresses = this.findAll();
    }
  }
}
