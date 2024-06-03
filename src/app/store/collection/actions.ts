import { createAction, props } from '@ngrx/store';
import { Book } from '../../types/books/books.interface';

export const addBookToCollection = createAction(
  '[Collection] Add book to collection',
  props<{ book: Book }>()
);

export const removeBookFromCollection = createAction(
  '[Collection] Remove book from collection',
  props<{ bookId: string }>()
);
