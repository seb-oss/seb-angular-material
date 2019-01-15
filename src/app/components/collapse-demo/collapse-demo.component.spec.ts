import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseDemoComponent } from './collapse-demo.component';

describe('CollapseDemoComponent', () => {
  let component: CollapseDemoComponent;
  let fixture: ComponentFixture<CollapseDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ CollapseDemoComponent ]
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
