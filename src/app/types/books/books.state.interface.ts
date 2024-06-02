import { Book } from './books.interface';

export interface BooksStateInterface {
  isLoading: boolean;
  books: Book[];
  error: string | null;
}
