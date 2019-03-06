import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-textarea-demo',
  templateUrl: './input-textarea-demo.component.html',
  styleUrls: ['./input-textarea-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputTextareaDemoComponent implements OnInit {

  exampleForm = new FormGroup({
    exampleField: new FormControl(undefined, Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

}
