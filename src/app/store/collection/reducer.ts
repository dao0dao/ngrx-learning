import { createReducer, on } from '@ngrx/store';
import { CollectionStateInterface } from '../../types/books/collection.state.interface';
import * as CollectionAction from './actions';

const initialState: CollectionStateInterface = {
  books: [],
};

export const collectionReducer = createReducer(
  initialState,
  on(CollectionAction.addBookToCollection, (state, action) => {
    const updatedBooks = [...state.books];
    const isExist = updatedBooks.findIndex((b) => b.id === action.book.id);
    if (-1 !== isExist) {
      return { ...state };
    }
    updatedBooks.push(action.book);
    return { ...state, books: updatedBooks };
  }),
  on(CollectionAction.removeBookFromCollection, (state, action) => ({
    ...state,
    books: state.books.filter((b) => b.id !== action.bookId),
  }))
);
