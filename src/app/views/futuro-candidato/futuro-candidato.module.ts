import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturoCandidatoRoutingModule } from './futuro-candidato-routing.module';
import { FuturoCandidatoComponent } from './futuro-candidato/futuro-candidato.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';


@NgModule({
  declarations: [
    FuturoCandidatoComponent
  ],
  imports: [
    CommonModule,
    FuturoCandidatoRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class FuturoCandidatoModule { }
