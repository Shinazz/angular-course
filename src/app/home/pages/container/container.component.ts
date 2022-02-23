import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  headerTitle = 'my angular app';
  show = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.headerTitle = 'some thing else';
      this.show = true;
    }, 3000);
  }
  exitted() {
    console.log('exited');
  }
}
