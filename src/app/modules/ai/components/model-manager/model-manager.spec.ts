import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelManager } from './model-manager';

describe('ModelManager', () => {
  let component: ModelManager;
  let fixture: ComponentFixture<ModelManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
