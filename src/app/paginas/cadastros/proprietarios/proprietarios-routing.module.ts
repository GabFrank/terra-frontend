import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietariosListComponent } from './proprietarios-list/proprietarios-list.component';


const routes: Routes = [
  {path: '', component: ProprietariosListComponent},
  // {path: 'new', component: ProprietariosFormComponent},
  // {path: ':id/edit', component: ProprietariosFormComponent},
  // {path: ':id/delete', component: ProprietariosFormComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
