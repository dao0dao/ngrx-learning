import { TodosStateInterface } from '../../types/todos/post.state.interface';
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
  })),
  on(TodoActions.completeTodo, (state, action) => {
    const index = state.todos.findIndex((t) => t.id === action.id);
    if (index > -1) {
      const updatedTodo = {
        ...state.todos[index],
        status: action.status,
      };
      const updatedTodos = [
        ...state.todos.slice(0, index),
        updatedTodo,
        ...state.todos.slice(index + 1),
      ];
      return {
        ...state,
        todos: updatedTodos,
      };
    }

    return state;
  }),
  on(TodoActions.removeTodo, (state, action) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== action.id),
  })),
  on(TodoActions.addTodo, (state, action) => {
    const updatedTodos = [...state.todos];
    updatedTodos.push(action.todo);
    return { ...state, todos: updatedTodos };
  })
);
