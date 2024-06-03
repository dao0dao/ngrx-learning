import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { BooksComponent } from './books/books.component';
import { CollectionComponent } from './collection/collection.component';

export const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'books', component: BooksComponent },
  { path: 'collection', component: CollectionComponent },
  { path: '**', redirectTo: '' },
];
