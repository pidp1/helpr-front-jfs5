import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { PerfilFuncionarioComponent } from './perfil-funcionario/perfil-funcionario.component';

const routes: Routes = [
  { 
    path: '', 
    component: FuncionariosComponent 
  },
  { 
    path: 'new', 
    component: NewFuncionarioComponent
  },
  {
    path: 'perfil',
    component: PerfilFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
