import { Todo } from './todo.interface';

export interface TodosStateInterface {
  isLoading: boolean;
  todos: Todo[];
  error: string | null;
}
