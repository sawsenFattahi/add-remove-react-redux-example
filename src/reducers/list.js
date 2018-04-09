import { fromJS } from 'immutable';
import { reject } from 'lodash';
import {ADD_TOLIST, DELETE_FROMLIST} from '../constants/ActionTypes';


const initialState = fromJS({
  text:[],
  count:0
})
const removeItem =  (text, idToRemove) => {const newList = reject(text, {id: Number(idToRemove)});console.log('newList', idToRemove); return newList;};
export default function list(state = initialState , action){
const oldState = state.toJS();
  switch(action.type){
    case ADD_TOLIST :  
      return state.set('text',[...oldState.text, {id:oldState.count+1, name: action.text}] )
                      .set('count',oldState.count+1);
    case DELETE_FROMLIST :  return state.set('text', removeItem(oldState.text, action.id));
    default: return state;
  }

}