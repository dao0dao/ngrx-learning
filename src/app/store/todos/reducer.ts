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
  on(TodoActions.getTodos, (state) => ({ ...state, isLoading: true })),
  on(TodoActions.getTodosSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    todos: action.todos,
  })),
  on(TodoActions.getTodosFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
