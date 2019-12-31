import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrasesComponent } from './frases/frases.component';
import { FrasesRoutingModule } from './frases-routing.module';

@NgModule({
  declarations: [FrasesComponent],
  imports: [
    CommonModule,
    FrasesRoutingModule
  ]
})
export class FrasesModule { }
