import * as types from '../constants/ActionTypes';

export const addToList = text => ({type: types.ADD_TOLIST, text});
export const deleteFromList = id => ({type: types.DELETE_FROMLIST, id});