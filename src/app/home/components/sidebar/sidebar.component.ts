import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items = [
    {
      state: 'admin',

      role: ['ADMIN'],
    },
    {
      state: 'robo sauce',

      role: ['ADMIN', 'OPS_USER'],
    },
    {
      state: 'cust actions',

      role: ['ADMIN'],
    },
  ];
  userName: string;
  userRole: string;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.userName = this.data.userName;
    console.log(this.items[0].role.includes(this.userRole));
  }

  onclick(item) {}
}
