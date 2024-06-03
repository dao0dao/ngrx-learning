import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../types/app.state.interface';

const selectCollectionFeature = (state: AppStateInterface) => state.collection;

export const collectionSelect = createSelector(
  selectCollectionFeature,
  (state) => state.books
);