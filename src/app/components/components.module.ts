import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ClarityModule } from '@clr/angular';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [
    ListComponent,
    FormComponent,
    HeaderComponent,
    SideBarComponent
  ],

})
export class ComponentsModule { }
