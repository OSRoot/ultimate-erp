import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { Home } from './home';
import { MenuItem } from './components/menu-item/menu-item';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent, FaDuotoneIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { TestComponent } from './components/test-component/test-component';
import { SystemProfileView } from './components/system-profile-view/system-profile-view';
import { AutoScaleDirective } from '../../core/directives/auto-scale.directive';

@NgModule({
  declarations: [
    Home,
    MenuItem,
    TestComponent,
    SystemProfileView
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    FaIconComponent,
    FaDuotoneIconComponent,
    TranslateModule,
    FontAwesomeModule,
    AutoScaleDirective
]
})
export class HomeModule { }
