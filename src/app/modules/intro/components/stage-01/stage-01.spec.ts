import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage01 } from './stage-01';

describe('Stage01', () => {
  let component: Stage01;
  let fixture: ComponentFixture<Stage01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stage01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
