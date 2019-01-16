import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDemoComponent } from './button-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ButtonDemoComponent', () => {
  let component: ButtonDemoComponent;
  let fixture: ComponentFixture<ButtonDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ButtonDemoComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
