import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';


const routes: Routes = [
  {path: '', component: CadastrosComponent},
  {path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path: 'proprietarios', loadChildren: () => import('./proprietarios/proprietarios.module').then(m => m.ProprietariosModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
