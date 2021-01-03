import {createStore, bindActionCreators} from "redux";
import reducer from './reducer';
import * as actions from './actions';
// редюсер


//  создаем хранилище
const store = createStore(reducer);
const {dispatch} = store;

// const actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

//  Проверяем нажатия кнопок
document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('res').addEventListener('click', ()=>{
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

//  функция обновляет counter
const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

// при каждом изменении
store.subscribe(update);