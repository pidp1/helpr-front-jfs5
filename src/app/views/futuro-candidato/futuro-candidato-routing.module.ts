import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuturoCandidatoComponent } from './futuro-candidato/futuro-candidato.component';

const routes: Routes = [{ path: '', component: FuturoCandidatoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuturoCandidatoRoutingModule { }
