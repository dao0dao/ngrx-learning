import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as TodosActions from './store/todos/actions';
import { isLoadingTodosSelector, TodosSelector } from './store/todos/selector';
import { Observable } from 'rxjs';
import { AppStateInterface } from './types/app.state.interface';
import { CommonModule } from '@angular/common';
import { Todo } from './types/todo.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private store: Store<AppStateInterface>) {
    this.store.dispatch(TodosActions.getTodos());
    this.isLoading$ = this.store.pipe(select(isLoadingTodosSelector));
    this.todos = this.store.pipe(select(TodosSelector));
  }
  isLoading$: Observable<boolean>;
  title = 'NgRxNgxBootsrrap';

  todo: string = '';
  todos: Observable<Todo[]>;
}
