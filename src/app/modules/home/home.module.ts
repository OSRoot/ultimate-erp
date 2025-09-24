import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Home } from './home';
import { MenuItem } from './components/menu-item/menu-item';


@NgModule({
  declarations: [
    Home,
    MenuItem
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
