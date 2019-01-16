import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsDemoComponent } from './tabs-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TabsDemoComponent', () => {
  let component: TabsDemoComponent;
  let fixture: ComponentFixture<TabsDemoComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [TabsDemoComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents().
      then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
