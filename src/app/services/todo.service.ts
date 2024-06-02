import { Injectable } from '@angular/core';
import { Todo } from '../types/todos/todo.interface';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos() {
    const todos: Todo[] = [
      { id: '1', text: 'przełożyć pranie', status: 'undone' },
      { id: '2', text: 'włączyć suszarkę', status: 'undone' },
      { id: '3', text: 'kupić prąd', status: 'undone' },
      { id: '4', text: 'doładować licznik', status: 'undone' },
      { id: '5', text: 'pogłaskać kota', status: 'undone' },
      { id: '6', text: 'pouczyć się', status: 'undone' },
    ];
    return of(todos).pipe(delay(2000));
  }
}
