import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDirective } from '../../directives/sample.directive';
import { StructureDirective } from '../../directives/structure.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SampleDirective, StructureDirective],
  imports: [CommonModule],
  exports: [
    SampleDirective,
    StructureDirective,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class ExternalModule {}
