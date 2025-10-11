import { Component, model, OnInit } from '@angular/core';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile-view',
  standalone: false,
  templateUrl: './system-profile-view.html',
  styleUrl: './system-profile-view.scss'
})

export class SystemProfileView implements OnInit {
  robot = faRobot
  constructor() { }
  ngOnInit(): void { }
}
