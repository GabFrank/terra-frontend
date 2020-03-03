import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuComponent } from './tab-menu.component';
import { ClientesListComponent } from 'src/app/paginas/cadastros/clientes/clientes-list/clientes-list.component';
import { ComponentsModule } from '../components/components.module';
import { TabContentComponent } from './tab-content/tab-content.component';
import { ContentContainerDirective } from './content-container.directive';
import { ClientesModule } from 'src/app/paginas/cadastros/clientes/clientes.module';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    TabMenuComponent,
    TabContentComponent,
    ],
  imports: [
    CommonModule,
    ComponentsModule,
    ClarityModule,
    ClientesModule
  ],
  exports: [
    TabMenuComponent
  ],
  entryComponents: [
    ClientesListComponent
  ]

})
export class TabMenuModule { }
