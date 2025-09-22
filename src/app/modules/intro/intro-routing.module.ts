import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Stage01 } from './components/stage-01/stage-01';
import { Stage02 } from './components/stage-02/stage-02';

const routes: Routes = [
  {
    path:'',
    component: Stage01
  },
  {
    path:'stage-01',
    component: Stage01
  },
  {
    path:'stage-02',
    component: Stage02
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
