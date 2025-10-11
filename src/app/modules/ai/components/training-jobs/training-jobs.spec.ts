import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingJobs } from './training-jobs';

describe('TrainingJobs', () => {
  let component: TrainingJobs;
  let fixture: ComponentFixture<TrainingJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingJobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
