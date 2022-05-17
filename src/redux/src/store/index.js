/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authorsReduser } from './authors/reduser';
import { customerReduser } from './user/reduser';

const rootReduser = combineReducers({
   cash: authorsReduser,
   customers: customerReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
