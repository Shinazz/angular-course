import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  name = 'shinaz';
  constructor(private data: DataService) {}

  ngOnInit(): void {
    console.log('init');
    this.name = this.data.userName;
  }
}
