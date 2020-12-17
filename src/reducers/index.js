import bookFormVisibleReducer from './book-form-visible-reducer';
import bookResultsVisibleReducer from './book-results-visible-reducer';
import booksReducer from './books-reducer';
import { combineReducers } from 'redux';
import searchParameterReducer from './search-parameter-reducer';

const rootReducer = combineReducers({
  bookResultsShowing: bookResultsVisibleReducer,
  bookFormShowing: bookFormVisibleReducer,
  books: booksReducer,
  newSearch: searchParameterReducer
}); 

export default rootReducer;

