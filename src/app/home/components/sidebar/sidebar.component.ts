import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items = ['admin', 'robo sauce', 'cust actions', 'something else'];
  userName: string;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.data.userName;
  }

  onclick(item) {}
}
