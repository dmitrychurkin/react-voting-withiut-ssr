import { combineReducers } from 'redux';
import fetchInitialState from './fetchInitialState';
import toggleAppMenu from './toggleAppMenu';

export default combineReducers({
  ui: toggleAppMenu,
  app: fetchInitialState
});