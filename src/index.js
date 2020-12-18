import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/index';
// import thunkMiddleware from 'redux-thunk';
// import { Provider } from 'react-redux';
// import middlewareLogger from './middleware/middleware-logger';


// const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );



