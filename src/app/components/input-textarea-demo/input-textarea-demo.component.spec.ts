import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextareaDemoComponent } from './input-textarea-demo.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('InputTextareaDemoComponent', () => {
  let component: InputTextareaDemoComponent;
  let fixture: ComponentFixture<InputTextareaDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ InputTextareaDemoComponent ],
      imports: [MaterialModule]
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
