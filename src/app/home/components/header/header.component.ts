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
export class HeaderComponent
  implements
    OnInit,
    AfterViewInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked
{
  @Input() title: string;

  @Output() signout: EventEmitter<string> = new EventEmitter();

  @ViewChild('headerTitle', { static: true }) someTitle: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

  ngAfterContentInit(): void {
    console.log('afetr view content init');
  }

  ngDoCheck(): void {
    console.log('on do check');
  }

  ngAfterContentChecked(): void {
    console.log('on after content checked');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngAfterViewInit(): void {
    console.log('on viewinit');
    // console.log(this.someTitle.nativeElement);
    this.someTitle.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {
    console.log(this.someTitle);
    console.log('on init');
  }

  exit() {
    this.signout.emit('signout');
  }
}
