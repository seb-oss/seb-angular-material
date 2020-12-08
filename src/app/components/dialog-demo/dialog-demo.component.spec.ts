import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { DialogDemoComponent } from './dialog-demo.component';

describe('DialogDemoComponent', () => {
  let component: DialogDemoComponent;
  let fixture: ComponentFixture<DialogDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
      declarations: [ DialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
