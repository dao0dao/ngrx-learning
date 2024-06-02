import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoadingTodosSelector, TodosSelector } from '../store/todos/selector';
import * as TodosActions from '../store/todos/actions';
import { AppStateInterface } from '../types/app.state.interface';
import { Todo } from '../types/todo.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  constructor(private store: Store<AppStateInterface>) {
    this.store.dispatch(TodosActions.getTodos());
    this.isLoading$ = this.store.pipe(select(isLoadingTodosSelector));
    this.todos = this.store.pipe(select(TodosSelector));
  }
  isLoading$: Observable<boolean>;

  todo: string = '';
  todos: Observable<Todo[]>;

  completeTodo(id: string) {
    this.store.dispatch(TodosActions.completeTodo({ id, status: 'done' }));
  }

  removeTodo(id: string) {
    this.store.dispatch(TodosActions.removeTodo({ id }));
  }

  addTodo() {
    const id = new Date().getTime().toString();
    const todo: Todo = {
      id,
      status: 'undone',
      text: this.todo,
    };
    this.store.dispatch(TodosActions.addTodo({ todo }));
    this.todo = '';
  }
}
