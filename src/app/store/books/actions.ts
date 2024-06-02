import { createAction, props } from "@ngrx/store";
import { Book } from "../../types/books/books.interface";

export const getBooksByAuthor = createAction('[Books] API Get books by author', props<{author: string}>());

export const getBooksByTitle = createAction('[Books] API Get books by title', props<{title: string}>());

export const updateBooksSuccess = createAction('[Books] API Get books success', props<{books: Book[]}>());