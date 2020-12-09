import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayDemoComponent } from './overlay-demo.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OverlayDemoComponent', () => {
  let component: OverlayDemoComponent;
  let fixture: ComponentFixture<OverlayDemoComponent>;

  const snackbarStub = {
    open: () => null
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [OverlayDemoComponent],
      providers: [{ provide: MatSnackBar, useValue: snackbarStub }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
