import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../types/app.state.interface';
import { Observable } from 'rxjs';
import { Book } from '../types/books/books.interface';
import { collectionSelect } from '../store/collection/selectors';
import * as CollectionActions from '../store/collection/actions';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  constructor(private store: Store<AppStateInterface>) {
    this.collections$ = this.store.pipe(select(collectionSelect));
  }
  collections$: Observable<Book[]>;

  remove(bookId: string) {
    this.store.dispatch(CollectionActions.removeBookFromCollection({ bookId }));
  }
}
