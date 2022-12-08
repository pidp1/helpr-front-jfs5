import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFuncionarioComponent } from './new-funcionario.component';

const routes: Routes = [{ path: '', component: NewFuncionarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFuncionarioRoutingModule { }
