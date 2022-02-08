import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { ContentComponent } from './pages/content/content.component';
import { Content2Component } from './pages/content2/content2.component';

const routes: Routes = [
  {
    path: 'home',
    component: ContainerComponent,
    children: [
      {
        path: 'content',
        component: ContentComponent,
      },
      {
        path: 'content2',
        component: Content2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
