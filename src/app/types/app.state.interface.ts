import { BooksStateInterface } from "./books/books.state.interface";
import { TodosStateInterface } from "./todos/todo.state.interface";

export interface AppStateInterface  {
    todos: TodosStateInterface
    books: BooksStateInterface
}