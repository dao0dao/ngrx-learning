import { createAction, props } from '@ngrx/store';
import { Todo } from '../../types/todo.interface';

export const getTodos = createAction('[Todos] Get todos');

export const getTodosSuccess = createAction(
  '[Todos] Get todos success',
  props<{ todos: Todo[] }>()
);
export const getTodosFailure = createAction(
  '[Todos] Get todos failure',
  props<{ error: string }>()
);
