import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [CadastrosComponent],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    ClarityModule,

  ]
})
export class CadastrosModule { }
