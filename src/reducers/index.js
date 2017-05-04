import { SEARCHING } from '../actions';
import { combineReducers } from 'redux';

const searchInitialState = {
  name: '',
  target: ''
}

const searching = ( state = searchInitialState, action ) => {
  switch( action.type ){
    case SEARCHING:
      return Object.assign( {}, state, {name: action.name, target: action.target});
    default:
      return state;
  }
}

const searchReducer = combineReducers({searching});
export default searchReducer;
