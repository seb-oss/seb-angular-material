import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDemoComponent } from './chip-demo.component';

describe('ChipDemoComponent', () => {
  let component: ChipDemoComponent;
  let fixture: ComponentFixture<ChipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
