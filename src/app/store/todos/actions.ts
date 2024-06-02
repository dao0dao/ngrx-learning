import { createAction, props } from '@ngrx/store';
import { Todo } from '../../types/todos/todo.interface';

export const getTodos = createAction('[Todos] Get todos');

export const getTodosSuccess = createAction(
  '[Todos] Get todos success',
  props<{ todos: Todo[] }>()
);
export const getTodosFailure = createAction(
  '[Todos] Get todos failure',
  props<{ error: string }>()
);

export const completeTodo = createAction(
  '[Todos] Complete todo',
  props<{ id: string; status: 'done' }>()
);

export const removeTodo = createAction(
  '[Todos] Remove todo',
  props<{ id: string }>()
);

export const addTodo = createAction(
  '[Todos] Add todo',
  props<{ todo: Todo }>()
);
