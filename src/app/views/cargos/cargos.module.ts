import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    CargosComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class CargosModule { }
