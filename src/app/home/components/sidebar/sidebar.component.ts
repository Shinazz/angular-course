import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items = ['admin', 'cust details', 'cust actions', 'something else'];
  userName: string;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.userName = this.data.userName;
  }
}
