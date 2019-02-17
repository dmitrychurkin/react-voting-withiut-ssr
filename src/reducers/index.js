import { combineReducers } from 'redux';
import fetchInitialState from './initialState';
import ui from './ui';
import authentication from './authentication';

export default combineReducers({
  ui,
  app: fetchInitialState,
  auth: authentication
});