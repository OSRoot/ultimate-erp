import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelManager } from '../ai/components/model-manager/model-manager';
import { UiLauncherService } from '../../core/services/navigation/ui-launcher.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone:false
})
export class Home {
  constructor(
    private router: Router,
    private ui : UiLauncherService
  ) {}

  open(route: string) {
    console.log(`[Home] Navigating to: ${route}`);

    if (!ModelManager.name.toLowerCase().includes(route)) return;
    // this.router.navigate([route]);
    this.ui.openComponent(ModelManager, route);
  }
}
