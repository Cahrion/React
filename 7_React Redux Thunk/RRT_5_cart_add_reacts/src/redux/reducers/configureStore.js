import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import thunk from 'redux-thunk'; // import thunk

export default function configureStore(){
    return createStore(rootReducer, applyMiddleware(thunk)); 
}