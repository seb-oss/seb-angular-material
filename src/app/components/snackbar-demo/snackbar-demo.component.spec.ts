import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarDemoComponent } from './snackbar-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material';

describe('SnackbarDemoComponent', () => {
  let component: SnackbarDemoComponent;
  let fixture: ComponentFixture<SnackbarDemoComponent>;

  const snackbarStub = {
    open: () => null
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarDemoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ { provide: MatSnackBar, useValue: snackbarStub },]
    })
    .compileComponents()
    .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
