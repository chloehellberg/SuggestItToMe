import * as c from './../actions/ActionTypes';

export default (state = [], action) => {
  const { query } = action;
  switch(action.type) {
    case c.SEARCH_BOOKS:
      return Object.assign({}, state, {
        
          query: query,
         
        
      });
    default:
      return state;
  };
};