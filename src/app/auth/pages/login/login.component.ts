import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = 'vipin';

  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {}

  clicked() {
    // console.log(this.email);
    this.data.userName = this.email;
    this.router.navigate(['home', 'content']);
  }
}
