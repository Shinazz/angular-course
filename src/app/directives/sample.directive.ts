import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSample]',
})
export class SampleDirective implements OnInit, AfterViewInit {
  @HostListener('mouseenter') turnBlue() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('keydown.enter') print() {
    console.log('a entered');
  }

  @HostBinding('value') value: string;

  @Input('appSample')
  color = 'blue';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.value);
    // this.el.nativeElement.style.color = 'red';
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }

  ngAfterViewInit(): void {
    this.value = 'red';
    this.cd.detectChanges();
    console.log(this.value);
  }
}
