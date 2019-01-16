import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseDemoComponent } from './collapse-demo.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('CollapseDemoComponent', () => {
  let component: CollapseDemoComponent;
  let fixture: ComponentFixture<CollapseDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [CollapseDemoComponent],
      imports: [MaterialModule]
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
