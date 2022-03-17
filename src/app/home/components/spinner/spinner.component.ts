import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  isSpinnerVisible: boolean;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.spinner.subscribe(
      (showSpinner) => (this.isSpinnerVisible = showSpinner)
    );
  }
}
