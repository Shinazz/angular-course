import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '../app/auth/auth.module';
import { HomeModule } from '../app/home/home.module';
import { DataService } from './service/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../app/api.interceptor';
import { SpinnerComponent } from './home/components/spinner/spinner.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ExternalModule } from './external/external/external.module';
console.log('app  module');

@NgModule({
  declarations: [AppComponent, SpinnerComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    ExternalModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
