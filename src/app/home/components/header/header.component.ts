import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
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

  @ViewChild('headerTitle', { static: true }) someTitle: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log(this.someTitle);
    console.log('on init');
  }

  exit() {
    this.signout.emit('signout');
  }
}
