import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { Stage01 } from './components/stage-01/stage-01';
import { Stage02 } from './components/stage-02/stage-02';


@NgModule({
  declarations: [
    Stage01,
    Stage02
  ],
  imports: [
    CommonModule,
    IntroRoutingModule
  ]
})
export class IntroModule { }
