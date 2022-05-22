import { ADD_AUTHOR, GET_AUTHOR } from './actionTypes';

/* eslint-disable prettier/prettier */
const addCash = (author) => {
   return { type: ADD_AUTHOR, payload: author };
};

const getCash = (author) => {
   return { type: GET_AUTHOR, payload: author };
};
