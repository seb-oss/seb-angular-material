import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-toggle-demo',
  templateUrl: './button-toggle-demo.component.html',
  styleUrls: ['./button-toggle-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonToggleDemoComponent implements OnInit {

  isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
