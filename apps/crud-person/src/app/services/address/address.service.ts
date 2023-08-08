import { Injectable } from '@angular/core';

import { Address } from 'src/app/shared/models/address.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private LS_KEY: string = 'addresses';

  constructor(private localStorageService: LocalStorageService) { }

  getById(id: number): Address | undefined {
    const address: Address[] = this.getAll();
    return address.find(address => address.id === id);
  }

  getAll(): Address[] {
    return this.localStorageService.getItem(this.LS_KEY) || [];
  }

  create(address: Address): void {
    const addresses = this.getAll();

    address.id = new Date().getTime();

    addresses.push(address);

    this.localStorageService.setItem(this.LS_KEY, addresses);
  }

  update(address: Address): void {
    const addresses: Address[] = this.getAll();
    const index = addresses.findIndex(p => p.id === address.id);

    if (index !== -1) {
      addresses[index] = address;
      this.localStorageService.setItem(this.LS_KEY, addresses);
    }
  }

  delete(id: number): void {
    let address: Address[] = this.getAll();

    address = address.filter(person => person.id !== id);

    this.localStorageService.setItem(this.LS_KEY, address);
  }
}