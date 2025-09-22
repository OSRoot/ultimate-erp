import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage02 } from './stage-02';

describe('Stage02', () => {
  let component: Stage02;
  let fixture: ComponentFixture<Stage02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stage02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
