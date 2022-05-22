/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authorReduser } from './authors/reduser';
import { customerReduser } from './user/reduser';

const rootReduser = combineReducers({
   authorReduser,
   customerReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
