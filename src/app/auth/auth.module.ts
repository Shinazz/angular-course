import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SampleDirective } from '../directives/sample.directive';
import { ExternalModule } from '../external/external/external.module';
import { FlexLayoutModule } from '@angular/flex-layout';
console.log('auth  module');

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ExternalModule,
    FlexLayoutModule,
  ],
})
export class AuthModule {}
