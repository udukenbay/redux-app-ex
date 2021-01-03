import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from "redux";
import {Provider} from 'react-redux';

import reducer from './reducer';
import App from './components/app';
 
//  создаем хранилище
const store = createStore(reducer);//keep in index.js

// const actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// }

// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

//keep in index.js
const update = () => {
    ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root'));
}
update();

// при каждом изменении
store.subscribe(update);//keep in index.js

