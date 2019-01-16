import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonToggleDemoComponent } from './button-toggle-demo.component';

describe('ButtonToggleDemoComponent', () => {
  let component: ButtonToggleDemoComponent;
  let fixture: ComponentFixture<ButtonToggleDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleDemoComponent]
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
