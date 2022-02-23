import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDirective } from '../../directives/sample.directive';
import { StructureDirective } from '../../directives/structure.directive';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [SampleDirective, StructureDirective],
  imports: [CommonModule],
  exports: [SampleDirective, StructureDirective, MatButtonModule],
})
export class ExternalModule {}
