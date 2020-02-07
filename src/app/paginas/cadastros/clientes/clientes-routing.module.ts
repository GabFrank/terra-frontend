import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';


const routes: Routes = [
  {path: '', component: ClientesListComponent},
  {path: 'new', component: ClientesFormComponent},
  {path: ':id/edit', component: ClientesFormComponent},
  {path: ':id/delete', component: ClientesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
