import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../types/app.state.interface';
import {
  booksSelector,
  isLoadingBooksSelector,
} from '../store/books/selectors';
import { Observable, take } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as BooksActions from '../store/books/actions';
import * as CollectionActions from '../store/collection/actions';
import { Book } from '../types/books/books.interface';
import { collectionSelect } from '../store/collection/selectors';

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
    this.collections$ = this.store.pipe(select(collectionSelect));
  }
  collections$: Observable<Book[]>;
  isToast: boolean = false;
  isToastError: boolean = false;
  toastText: 'Dodano książkę' | 'Ta książka jest już zapisana' =
    'Dodano książkę';
  isLoading$: Observable<boolean>;
  books$: Observable<Book[]>;
  inputText: string = '';
  action: SearchAction = 'Autor książki';

  changeSearch(action: SearchAction) {
    this.action = action;
  }

  addBook(book: Book) {
    this.collections$.pipe(take(1)).subscribe({
      next: (collections) => {
        const isExist = collections.findIndex((c) => c.id === book.id);
        if (-1 === isExist) {
          this.toastText = 'Dodano książkę';
          this.isToast = true;
          this.isToastError = false;
          this.store.dispatch(CollectionActions.addBookToCollection({ book }));
        } else {
          this.toastText = 'Ta książka jest już zapisana';
          this.isToast = true;
          this.isToastError = true;
        }
        setTimeout(() => {
          this.closeToast();
        }, 2000);
      },
    });
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

  closeToast() {
    this.isToast = false;
  }
}
