import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHosting } from './model-hosting';

describe('ModelHosting', () => {
  let component: ModelHosting;
  let fixture: ComponentFixture<ModelHosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelHosting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelHosting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
