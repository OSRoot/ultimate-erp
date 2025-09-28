import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { Home } from './home';
import { MenuItem } from './components/menu-item/menu-item';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent, FaDuotoneIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { TestComponent } from './components/test-component/test-component';

@NgModule({
  declarations: [
    Home,
    MenuItem,
    TestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    FaIconComponent,
    FaDuotoneIconComponent,
    TranslateModule
]
})
export class HomeModule { }
