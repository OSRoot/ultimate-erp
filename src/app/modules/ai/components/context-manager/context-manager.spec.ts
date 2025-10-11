import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextManager } from './context-manager';

describe('ContextManager', () => {
  let component: ContextManager;
  let fixture: ComponentFixture<ContextManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContextManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
