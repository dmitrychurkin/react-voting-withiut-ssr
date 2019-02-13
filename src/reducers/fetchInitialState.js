import { createReducer } from 'redux-starter-kit';
import * as fetchInitialState from '../actions/fetchInitialState';

const defaultState = { 
  uuid: null,
  isAuthenticated: false,
  isRequestSent: false,
  emailVerified: false,
  firstName: null,
  lastName: null,
  email: null
};

export default createReducer(defaultState, {
  [fetchInitialState.request]: (state, { payload: { requestSent= true } }) => ({ ...state, requestSent }),
  //[fetchInitialState.success]: ()
});