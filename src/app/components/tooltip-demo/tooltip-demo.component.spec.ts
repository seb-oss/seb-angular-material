import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipDemoComponent } from './tooltip-demo.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('TooltipDemoComponent', () => {
  let component: TooltipDemoComponent;
  let fixture: ComponentFixture<TooltipDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [TooltipDemoComponent],
      imports: [MaterialModule]
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
