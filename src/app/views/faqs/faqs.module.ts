import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faq/faqs.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule, 
    ComponentsModule, 
    
  ]
})
export class FaqsModule { }
