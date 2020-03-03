import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { TabService } from './tab-menu/tab.service';
import { TabMenuModule } from './tab-menu/tab-menu.module';
import { ContentContainerDirective } from './tab-menu/content-container.directive';
import { ClientesListComponent } from './paginas/cadastros/clientes/clientes-list/clientes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    ComponentsModule,
    TabMenuModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ClientesListComponent]
})
export class AppModule { }
