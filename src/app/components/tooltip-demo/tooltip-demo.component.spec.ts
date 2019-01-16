import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoComponent } from './tooltip-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TooltipDemoComponent', () => {
  let component: TooltipDemoComponent;
  let fixture: ComponentFixture<TooltipDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents()
    .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
