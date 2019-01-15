import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MarkdownViewerComponent } from './markdown-viewer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MarkdownViewerComponent', () => {
  let component: MarkdownViewerComponent;
  let fixture: ComponentFixture<MarkdownViewerComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [MarkdownViewerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule]
    })
      .compileComponents()
      .then(done);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
