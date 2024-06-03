import { BooksStateInterface } from "./books/books.state.interface";
import { CollectionStateInterface } from "./books/collection.state.interface";
import { TodosStateInterface } from "./todos/todo.state.interface";

export interface AppStateInterface  {
    todos: TodosStateInterface
    books: BooksStateInterface
    collection: CollectionStateInterface
}