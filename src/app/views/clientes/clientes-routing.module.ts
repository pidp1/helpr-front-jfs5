import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FututoClienteComponent } from './fututo-cliente/fututo-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'new',
    component: NewClienteComponent
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent
  },
  {
    path: 'futurocliente',
    component: FututoClienteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ClientesRoutingModule { }
