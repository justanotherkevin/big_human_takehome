import { combineReducers } from 'redux';
import plantState from './plantsReducer';
import errorsState from './errorsReducer';
import authState from './authReducer';

export default combineReducers({
  plantState,
  errorsState,
  authState,
});
