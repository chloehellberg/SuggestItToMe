import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/headlines-reducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


