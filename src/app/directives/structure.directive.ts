import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appStructure]',
})
export class StructureDirective implements OnInit, OnChanges {
  @Input('appStructure')
  appStructure: boolean;
  constructor(
    private vc: ViewContainerRef,
    private tempRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    console.log('structuring');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appStructure) {
      this.vc.createEmbeddedView(this.tempRef);
      console.log('created');
    }
  }
}
