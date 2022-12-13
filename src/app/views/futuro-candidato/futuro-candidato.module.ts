import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturoCandidatoRoutingModule } from './futuro-candidato-routing.module';
import { FuturoCandidatoComponent } from './futuro-candidato/futuro-candidato.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    FuturoCandidatoComponent
  ],
  imports: [
  CommonModule,
  FuturoCandidatoRoutingModule,
  MaterialModule,
  ReactiveFormsModule,
  FormsModule,
  ComponentsModule

  ]
})
export class FuturoCandidatoModule { }
