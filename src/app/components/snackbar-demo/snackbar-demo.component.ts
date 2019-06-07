import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
        duration: 5000,
      });
  }

  ngOnInit() {
  }

}
