import { Injectable } from '@angular/core';
import {} from '@ngrx/store';
import { BooksService } from '../../services/books.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BooksActions from './actions';
import { map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookEffectsService {
  constructor(private actions$: Actions, private httpBooks: BooksService) {}

  private getBooksByAuthor = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.getBooksByAuthor),
      mergeMap((data) => {
        return this.httpBooks.getBooksByAuthor(data.author);
      }),
      map(({ items }) => BooksActions.updateBooksSuccess({ books: items }))
    )
  );

  private getBooksByTitle = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.getBooksByTitle),
      mergeMap((data) => {
        return this.httpBooks.getBooksByAuthor(data.title);
      }),
      map(({ items }) => BooksActions.updateBooksSuccess({ books: items }))
    )
  );
}
