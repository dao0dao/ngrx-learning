import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'books', component: BooksComponent },
  { path: '**', redirectTo: '' },
];
