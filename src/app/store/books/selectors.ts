import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../types/app.state.interface';

const selectorBooksFeature = (appState: AppStateInterface) => appState.books;

export const isLoadingBooksSelector = createSelector(
  selectorBooksFeature,
  (state) => state.isLoading
);

export const booksSelector = createSelector(
  selectorBooksFeature,
  (state) => state.books
);
