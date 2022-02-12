import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '../app/auth/auth.module';
import { HomeModule } from '../app/home/home.module';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HomeModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
