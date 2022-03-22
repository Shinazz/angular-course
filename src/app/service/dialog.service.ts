import { Injectable } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openAlertBox(title: string, msg: string, additionalData?: any) {
    this.dialog
      .open(DialogComponent, {
        data: { title, msg, additionalData },
        width: '50vw',
        height: '50vh',
      })
      .afterClosed()
      .subscribe((res) => console.log(res));
  }
}
