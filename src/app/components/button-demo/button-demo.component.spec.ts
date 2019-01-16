import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDemoComponent } from './button-demo.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('ButtonDemoComponent', () => {
  let component: ButtonDemoComponent;
  let fixture: ComponentFixture<ButtonDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ButtonDemoComponent],
      imports: [MaterialModule]
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
