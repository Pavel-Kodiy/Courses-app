/* eslint-disable prettier/prettier */
import { ADD_AUTHOR, GET_AUTHOR } from "./actionTypes";

const defaultState = {};
export const authorReduser = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_AUTHOR:
         return { ...state, author: state.author + action.payload };
      case GET_AUTHOR:
         return { ...state, author: state.author - action.payload };
      default:
         return state;
   }
};
