import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietariosComponent } from './proprietarios.component';
import { ProprietariosListComponent } from './proprietarios-list/proprietarios-list.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [ProprietariosComponent, ProprietariosListComponent],
  imports: [
    CommonModule,
    ProprietariosRoutingModule,
    ClarityModule

  ]
})
export class ProprietariosModule { }
