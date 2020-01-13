import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: 'dialog-example.html',
})
export class DialogExampleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogDemoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
