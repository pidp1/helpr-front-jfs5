import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DialogComponent } from './dialog/dialog.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent,
    DialogComponent
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
