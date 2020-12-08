import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayDemoComponent } from './overlay-demo.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

describe('OverlayDemoComponent', () => {
  let component: OverlayDemoComponent;
  let fixture: ComponentFixture<OverlayDemoComponent>;

  const snackbarStub = {
    open: () => null
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [OverlayDemoComponent],
      providers: [
        {
          provide: MatSnackBar,
          useValue: snackbarStub
        },
        {
          provide: MatBottomSheet,
          useValue: {}
        }
      ],
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
