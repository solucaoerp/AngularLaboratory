import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'persons',
    loadChildren: () => import('./modules/person/person.module').then(m => m.PersonModule)
  },
  {
    path: 'addresses',
    loadChildren: () => import('./modules/address/address.module').then(m => m.AddressModule)
  },
  {
    path: '',
    redirectTo: 'persons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
