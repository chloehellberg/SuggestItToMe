import searchParameterReducer from '../../reducers/search-parameter-reducer';

describe('searchParameterReducer', () => {

  const defaultQueryState = {
    query: []
  };

  test('should successfully return the default query state if no action is passed into it', () => {
    expect(searchParameterReducer(defaultQueryState, {type: null })).toEqual(
      {
       query: []
      }
    );
  });
});