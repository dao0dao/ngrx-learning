import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../types/app.state.interface';

const selectTodosFeature = (state: AppStateInterface) => state.todos;

export const isLoadingTodosSelector = createSelector(
  selectTodosFeature,
  (state) => state.isLoading
);

export const TodosSelector = createSelector(
  selectTodosFeature,
  (state) => state.todos
);

export const TodosErroSelector = createSelector(
  selectTodosFeature,
  (state) => state.error
);
