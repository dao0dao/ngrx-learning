import { createReducer, on } from '@ngrx/store';
import { BooksStateInterface } from '../../types/books/books.state.interface';
import * as BooksActions from './actions';

const initialState: BooksStateInterface = {
  isLoading: false,
  books: [],
  error: null,
};

export const BooksReducer = createReducer(
  initialState,
  on(BooksActions.updateBooksSuccess, (state, action) => ({
    ...state,
    books: action.books,
    error: null,
    isLoading: false,
  })),
  on(BooksActions.getBooksByAuthor, (state) => ({
    ...state,
    books: [],
    isLoading: true,
  })),
  on(BooksActions.getBooksByTitle, (state) => ({
    ...state,
    books: [],
    isLoading: true,
  }))
);
