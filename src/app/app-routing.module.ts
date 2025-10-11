import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './modules/home/components/test-component/test-component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'intro'
  },
  {
    path:'intro',
    loadChildren: () => import('./modules/intro/intro.module').then(m => m.IntroModule)
  },
  {
    path:'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'test-component',
    component:TestComponent
  },
  {
    path:'ai',
    loadChildren: () => import('./modules/ai/ai.module').then(m => m.AIModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
