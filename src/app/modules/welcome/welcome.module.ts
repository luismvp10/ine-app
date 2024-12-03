import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeRoutingModule} from '@modules/welcome/welcome-routing.module';


import {FormsModule} from '@angular/forms';
import {BookService} from '@modules/welcome/services/book.service';
import {MainComponent} from '@modules/welcome/components/main/main.component';
import {OptionsDropdownComponent} from '@modules/welcome/components/options-dropdown/options-dropdown.component';
import {DetailComponent} from '@modules/welcome/components/detail/detail.component';
import {BookListComponent} from '@modules/welcome/components/book-list/book-list.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    MainComponent,
    OptionsDropdownComponent,
    DetailComponent,
    BookListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WelcomeRoutingModule,
  ],
  providers: [BookService]
})
export class WelcomeModule { }
