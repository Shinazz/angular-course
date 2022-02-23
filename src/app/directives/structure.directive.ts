import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appStructure]',
})
export class StructureDirective implements OnInit {
  @Input('appStructure')
  appStructure: boolean;
  constructor(
    private vc: ViewContainerRef,
    private tempRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    console.log('structuring');
    if (this.appStructure) {
      this.vc.createEmbeddedView(this.tempRef);
      console.log('created');
    }
  }
}
