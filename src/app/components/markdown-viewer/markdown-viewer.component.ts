import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { Converter } from 'showdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-viewer',
  template: '<div innerHtml="{{readmeContent}}"></div>',
  styleUrls: ['./markdown-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownViewerComponent {

  readmeContent: string;

  private converter: Converter;

  private _path: string;

  constructor(
    private http: HttpClient
  ) {
    this.converter = new Converter();
  }

  loadFile(): any {
    if (this.path) {
      this.http.get(this.path, { responseType: 'text' })
        .toPromise().then(result => this.readmeContent = this.converter.makeHtml(result));
    }
  }

  @Input()
  set path(value: string) {
    this._path = value;
    this.loadFile();
  }

  get path(): string {
    return this._path;
  }

}
