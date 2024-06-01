import { TodosStateInterface } from '../../types/post.state.interface';
import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './actions';

export const todosInitialState: TodosStateInterface = {
  error: null,
  isLoading: false,
  todos: [],
};

export const todosReducer = createReducer(
  todosInitialState,
  on(TodoActions.getTodos, (state) => ({ ...state, isLoading: true }))
);
