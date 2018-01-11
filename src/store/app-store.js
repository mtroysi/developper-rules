import { combineReducers } from 'redux';
import {rulesReducer} from '../reducers/rules-reducer';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    rules: rulesReducer,
    form: formReducer
});

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
    )
);
export default store;

