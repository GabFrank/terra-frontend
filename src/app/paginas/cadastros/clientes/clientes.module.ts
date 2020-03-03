import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ClientesListComponent, ClientesFormComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ClarityModule,
    FormsModule,
    ComponentsModule
  ]
})
export class ClientesModule { }
