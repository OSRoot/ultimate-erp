import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceEngine } from './inference-engine';

describe('InferenceEngine', () => {
  let component: InferenceEngine;
  let fixture: ComponentFixture<InferenceEngine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InferenceEngine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InferenceEngine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
