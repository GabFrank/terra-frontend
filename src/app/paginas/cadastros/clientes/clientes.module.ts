import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';


@NgModule({
  declarations: [ClientesListComponent, ClientesFormComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
