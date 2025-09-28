import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { ThreeWindowManager } from '../../../../core/managers/windows/_3d-window.manager';
@Component({
  selector: 'app-test-component',
  standalone: false,
  templateUrl: './test-component.html',
  styleUrl: './test-component.scss'
})
export class TestComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvasHost', {static:true}) host !: ElementRef<HTMLDivElement>;
  private three_manager !: ThreeWindowManager;
  private cube !: THREE.Mesh;

  ngAfterViewInit(): void {
    this.three_manager = new ThreeWindowManager({
      el: this.host.nativeElement,
      useComposer:false,
      clearColor: 0x0b0e14,
      clearAlpha: 1,
      fov: 55
    })
    this.three_manager.init();
    // demo
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const materila = new THREE.MeshStandardMaterial({color:0x4eaff, roughness: 0.3, metalness: 0.2});
    this.cube = new THREE.Mesh(geo, materila);
    this.three_manager.getWorld().add(this.cube);

    this.three_manager.start((dt, t)=> {
      this.cube.rotation.x += dt * 0.8;
      this.cube.rotation.y += dt * 0.6;
      // camera slight float
      const cam =  this.three_manager.getCamera();
      cam.position.z = 5 + Math.sin(t * 0.7) * 0.2;
    })
  }


  ngOnDestroy(): void {
    this.three_manager.dispose();
  }
}
