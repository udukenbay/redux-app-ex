import {createStore} from "redux";
import reducer from './reducer';
import {inc, dec, rnd} from './actions';
// редюсер


//  создаем хранилище
const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
}

const incDispatch = bindActionCreator(inc, dispatch)
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

//  Проверяем нажатия кнопок
document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('res').addEventListener('click', ()=>{
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});

//  функция обновляет counter
const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

// при каждом изменении
store.subscribe(update);