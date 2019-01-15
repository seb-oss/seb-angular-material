import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextareaDemoComponent } from './input-textarea-demo.component';

describe('InputTextareaDemoComponent', () => {
  let component: InputTextareaDemoComponent;
  let fixture: ComponentFixture<InputTextareaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextareaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextareaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
