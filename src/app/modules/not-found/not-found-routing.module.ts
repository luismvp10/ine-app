import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NotFoundPageComponent} from '@modules/not-found/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
    title: '404 Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
