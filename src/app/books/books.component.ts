import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../types/app.state.interface';
import {
  booksSelector,
  isLoadingBooksSelector,
} from '../store/books/selectors';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as BooksActions from '../store/books/actions';
import * as CollectionActions from '../store/collection/actions';
import { Book } from '../types/books/books.interface';

type SearchAction = 'Tytuł książki' | 'Autor książki';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = store.pipe(select(isLoadingBooksSelector));
    this.books$ = store.pipe(select(booksSelector));
  }
  isLoading$: Observable<boolean>;
  books$: Observable<Book[]>;
  inputText: string = '';
  action: SearchAction = 'Autor książki';

  changeSearch(action: SearchAction) {
    this.action = action;
  }

  addBook(book: Book) {
    this.store.dispatch(CollectionActions.addBookToCollection({ book }));
  }

  find() {
    if (!this.inputText) {
      return;
    }
    switch (this.action) {
      case 'Autor książki':
        this.store.dispatch(
          BooksActions.getBooksByAuthor({ author: this.inputText })
        );
        break;
      case 'Tytuł książki':
        this.store.dispatch(
          BooksActions.getBooksByTitle({ title: this.inputText })
        );
        break;
    }
  }
}
