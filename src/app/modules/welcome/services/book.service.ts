import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '@modules/welcome/interfaces/entities/book.entity';
import {Observable} from 'rxjs';

@Injectable()
export class BookService {

  private readonly http: HttpClient = inject(HttpClient);
  private readonly booksUrl: string = 'assets/json/book-list.json';


  public getBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.booksUrl);
  }
}
