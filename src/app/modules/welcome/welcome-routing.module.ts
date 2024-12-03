import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from '@modules/welcome/components/main/main.component';
import {DetailComponent} from '@modules/welcome/components/detail/detail.component';
import {BookListComponent} from '@modules/welcome/components/book-list/book-list.component';



const routes: Routes = [
  { path: 'welcome', component: MainComponent,
    children: [
      { path: 'books', component: BookListComponent },
      { path: ':option', component: DetailComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
