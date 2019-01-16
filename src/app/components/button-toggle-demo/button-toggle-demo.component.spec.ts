import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonToggleDemoComponent } from './button-toggle-demo.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('ButtonToggleDemoComponent', () => {
  let component: ButtonToggleDemoComponent;
  let fixture: ComponentFixture<ButtonToggleDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleDemoComponent],
      imports: [MaterialModule]
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
