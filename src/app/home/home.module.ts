import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { ContentComponent } from './pages/content/content.component';
import { Content2Component } from './pages/content2/content2.component';
import { ContainerComponent } from './pages/container/container.component';
import { HomeRoutingModule } from './home.routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    Content2Component,
    ContentComponent,
    ContainerComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
