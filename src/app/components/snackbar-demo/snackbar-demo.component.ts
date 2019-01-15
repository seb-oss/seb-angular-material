import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarDemoComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('Snackbar Example', 'Ok',
      {
        duration: 500,
      });
  }

  ngOnInit() {
  }

}
