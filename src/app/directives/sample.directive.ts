import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSample]',
})
export class SampleDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    console.log((this.el.nativeElement.style.color = 'red'));
    setTimeout(() => {
      this.el.nativeElement.disabled = false;
    }, 2000);
    this.el.nativeElement.disabled = true;
  }
}
