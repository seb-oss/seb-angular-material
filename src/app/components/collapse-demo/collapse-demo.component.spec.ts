import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseDemoComponent } from './collapse-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CollapseDemoComponent', () => {
  let component: CollapseDemoComponent;
  let fixture: ComponentFixture<CollapseDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [CollapseDemoComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
