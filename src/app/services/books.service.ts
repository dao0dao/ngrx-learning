import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from '../types/books/books.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private http = inject(HttpClient);

  getBooksByAuthor(author: string) {
   return this.http.get<{ items: Book[] }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=10&q=+AND+authors=' +
        author
    );
  }

  getBooksByTitle(title: string) {
    return this.http.get<{ items: Book[] }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=10&q=+AND+title=' +
        title
    );
  }
}
