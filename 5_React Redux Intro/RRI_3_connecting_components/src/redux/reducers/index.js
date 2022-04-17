import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const reducers = combineReducers({
    counterReducer // auto variable
});

export default reducers;