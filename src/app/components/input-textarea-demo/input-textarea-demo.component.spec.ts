import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextareaDemoComponent } from './input-textarea-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputTextareaDemoComponent', () => {
  let component: InputTextareaDemoComponent;
  let fixture: ComponentFixture<InputTextareaDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ InputTextareaDemoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents()
    .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextareaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
