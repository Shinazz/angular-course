import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Output() signout: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  exit() {
    this.signout.emit('signout');
  }
}
