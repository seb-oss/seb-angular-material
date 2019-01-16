import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackbarDemoComponent } from './snackbar-demo.component';
import { MatSnackBar } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';

describe('SnackbarDemoComponent', () => {
  let component: SnackbarDemoComponent;
  let fixture: ComponentFixture<SnackbarDemoComponent>;

  const snackbarStub = {
    open: () => null
  };

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [SnackbarDemoComponent],
      providers: [{ provide: MatSnackBar, useValue: snackbarStub },],
      imports: [MaterialModule],
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
