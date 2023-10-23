// action-types.ts
export const SEARCH_BOOKS = '[Books] Search';
export const SEARCH_BOOKS_SUCCESS = '[Books] Search Success';
export const SEARCH_BOOKS_FAILURE = '[Books] Search Failure';
export const CLEAR_SEARCH = '[Books] Clear Search';

// actions.ts
import { createAction, props } from '@ngrx/store';
import { Book } from '@tmo/shared/models';

export const searchBooks = createAction(
  SEARCH_BOOKS,
  props<{ term: string }>()
);

export const searchBooksSuccess = createAction(
  SEARCH_BOOKS_SUCCESS,
  props<{ books: Book[] }>()
);

export const searchBooksFailure = createAction(
  SEARCH_BOOKS_FAILURE,
  props<{ error: any }>()
);

export const clearSearch = createAction(CLEAR_SEARCH);