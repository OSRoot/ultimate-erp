import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { TestComponent } from './components/test-component/test-component';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path:'test-component',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
