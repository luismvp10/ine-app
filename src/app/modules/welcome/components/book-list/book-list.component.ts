import {Component, inject, OnInit} from '@angular/core';
import {Book} from '@modules/welcome/interfaces/entities/book.entity';
import {BookService} from '@modules/welcome/services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: false,

  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  private readonly bookService: BookService = inject(BookService);

  public books: Array<Book> = [];
  public filteredBooks: Array<Book> = [];
  public searchText: string = '';


  ngOnInit(): void {
    this.getBookList();
  }

  private getBookList(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.filteredBooks = data;
    });
  }

  public filterBooks(): void {
    this.filteredBooks = this.books.filter((book) =>
      book.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
