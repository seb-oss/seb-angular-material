import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-collapse-demo',
  templateUrl: './collapse-demo.component.html',
  styleUrls: ['./collapse-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollapseDemoComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
