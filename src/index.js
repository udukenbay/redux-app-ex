import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';

import reducer from './reducer';
import App from './components/app';
 
//  создаем хранилище
const store = createStore(reducer);//keep in index.js


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
