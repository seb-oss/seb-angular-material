import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'app-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  styleUrls: ['./overlay-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OverlayDemoComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
  ) { }

  openSnackBar() {
    this.snackBar.open('Snackbar Example', 'Ok',
      {
        duration: 5000,
      });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  ngOnInit() {
  }

}
