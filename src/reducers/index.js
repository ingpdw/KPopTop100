import { SEARCHING } from '../actions';
import { combineReducers } from 'redux';

const searchInitialState = {
  value: ''
}

const searching = ( state = searchInitialState, action ) => {
  switch( action.type ){
    case SEARCHING:
      return Object.assign( {}, state, {value: action.value});
    default:
      return state;
  }
}

const searchReducer = combineReducers({searching});
export default searchReducer;
