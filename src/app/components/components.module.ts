import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
 
    ReactiveFormsModule,
    
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
