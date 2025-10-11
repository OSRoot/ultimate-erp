import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faRobot, faBrain, faChartLine, faFolderOpen, faShieldAlt, faEye,
  faLightbulb, faTasks, faProjectDiagram, faCogs, faHistory,
  faTerminal, faPlug, faExchangeAlt, faCog, faServer
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.html',
  styleUrls: ['./menu-item.scss'],
  standalone:false
})
export class MenuItem implements OnInit {
  @Input() icon!: string | IconDefinition;
  @Input() label!: string;

  private soundsReady = false;
  private tapSound!: HTMLAudioElement;

  iconMap: Record<string, IconDefinition> = {
    robot: faRobot,
    brain: faBrain,
    'chart-line': faChartLine,
    'folder-open': faFolderOpen,
    'shield-alt': faShieldAlt,
    eye: faEye,
    lightbulb: faLightbulb,
    tasks: faTasks,
    'project-diagram': faProjectDiagram,
    cogs: faCogs,
    history: faHistory,
    terminal: faTerminal,
    plug: faPlug,
    'exchange-alt': faExchangeAlt,
    cog: faCog,
    server: faServer
  };

  get resolvedIcon(): IconDefinition | undefined {
    if (typeof this.icon !== 'string') return this.icon;
    return this.iconMap[this.icon] ?? faCog; // default fallback
  }

  ngOnInit(): void {
    this.tapSound = new Audio('/assets/sounds/tap-tone.wav');
    this.tapSound.volume = 0.3;

    const onFirstInteraction = () => {
      this.soundsReady = true;
      this.tapSound.play().catch(() => {});
      document.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('keydown', onFirstInteraction);
    };
    document.addEventListener('click', onFirstInteraction);
    document.addEventListener('keydown', onFirstInteraction);
  }

  playHoverSound() {
    if (this.soundsReady && this.tapSound) {
      this.tapSound.currentTime = 0;
      this.tapSound.play().catch(() => {});
    }
  }
}
