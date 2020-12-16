import bookFormVisibleReducer from './book-form-visible-reducer';
import bookResultsVisibleReducer from './book-results-visible-reducer';
import booksReducer from './books-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  bookResultsShowing: bookResultsVisibleReducer,
  bookFormShowing: bookFormVisibleReducer,
  books: booksReducer
});

export default rootReducer;

