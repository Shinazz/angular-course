import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { ContentComponent } from './pages/content/content.component';
import { Content2Component } from './pages/content2/content2.component';
import { AuthGuard } from '../auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'content',
        component: ContentComponent,
        canActivate: [AuthGuard],
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
