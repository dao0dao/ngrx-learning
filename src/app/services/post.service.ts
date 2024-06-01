import { Injectable } from '@angular/core';
import { Todo } from '../types/todo.interface';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getTodos() {
    const todos: Todo[] = [
      { id: '1', text: 'przełożyć pranie' },
      { id: '2', text: 'włączyć suszarkę' },
      { id: '3', text: 'kupić prąd' },
      { id: '4', text: 'doładować licznik' },
      { id: '5', text: 'pogłaskać kota' },
      { id: '6', text: 'pouczyć się' },
    ];
    return of(todos).pipe(delay(2000));
  }
}
