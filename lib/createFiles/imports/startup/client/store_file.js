import { createStore, combineReducers }  from 'redux';
import { routerReducer } from 'react-router-redux';
// import * as reducers from '';

const store = createStore(
  combineReducers({
// ...reducers,
    routing: routerReducer
  })
);

export default store;
