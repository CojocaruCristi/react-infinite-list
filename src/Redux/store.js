import {applyMiddleware, combineReducers, createStore} from "redux";
import imgReducer from "./img-reducer";
import thunkMiddleWare from 'redux-thunk';


let reducers = combineReducers({
  images: imgReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;