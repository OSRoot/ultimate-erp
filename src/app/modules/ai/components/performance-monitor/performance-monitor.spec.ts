import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMonitor } from './performance-monitor';

describe('PerformanceMonitor', () => {
  let component: PerformanceMonitor;
  let fixture: ComponentFixture<PerformanceMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceMonitor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceMonitor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
