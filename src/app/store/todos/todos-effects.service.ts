import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodosActions from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodosEffectsService {
  constructor(private actions$: Actions, private todosService: TodoService) {}

  private getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.getTodos),
      mergeMap(() => {
        return this.todosService.getTodos();
      }),
      map((todos) => TodosActions.getTodosSuccess({ todos })),
      catchError((error) =>
        of(TodosActions.getTodosFailure({ error: error.mesage }))
      
      )
    )
  );
}
