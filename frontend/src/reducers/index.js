import { combineReducers } from 'redux';
import plantState from './plantsReducer';
import errorsState from './errorsReducer';

export default combineReducers({
  plantState,
  errorsState,
});
