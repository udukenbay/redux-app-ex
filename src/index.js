import {createStore} from "redux";

const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
// let state = reducer(undefined, {});

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

// state = reducer(state, {type: 'INC'});
// console.log(state);

// state = reducer(state, {type: 'INC'});
// console.log(state);