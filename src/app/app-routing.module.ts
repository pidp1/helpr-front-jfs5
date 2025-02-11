import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule)
  },
  { 
    path: 'funcionarios', 
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
  },
  { path: 'cargos', 
  loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule) 
  },

  { path: 'faq', 
  loadChildren: () => import('./views/faqs/faqs.module').then(m => m.FaqsModule) },
  
  { path: 'futurocandidato', loadChildren: () => import('./views/futuro-candidato/futuro-candidato.module').then(m => m.FuturoCandidatoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
