import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoComponent } from './tooltip-demo.component';

describe('TooltipDemoComponent', () => {
  let component: TooltipDemoComponent;
  let fixture: ComponentFixture<TooltipDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoComponent ]
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
