import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

// store.subscribe(() =>
//   console.log(store.getState())
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


