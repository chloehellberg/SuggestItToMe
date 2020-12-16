import * as c from './ActionTypes';

export const requestBooks = () => ({
  type: c.REQUEST_BOOKS
});

export const getBooksSuccess = (books) => ({
  type: c.GET_BOOKS_SUCCESS,
  books
});

export const getBooksFailure = (error) => ({
  type: c.GET_BOOKS_FAILURE,
  error
});


export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestBooks);
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getHeadlinesSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getHeadlinesFailure(error));
      });
  }
}