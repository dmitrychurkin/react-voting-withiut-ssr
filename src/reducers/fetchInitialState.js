import * as fetchInitialState from '../actionTypes/fetchInitialState';


export default (state= { 
  uuid: null,
  isAuthenticated: false,
  isError: false,
  error: null,
  isRequestSent: false,
  emailVerified: false,
  firstName: null,
  lastName: null,
  email: null
}, action) => {
  switch (action.type) {
    case fetchInitialState.REQUEST:
    case fetchInitialState.SUCCESS:
    case fetchInitialState.FAILURE: {
      return { ...state, ...action.payload };
    }
    default: 
      return state;
  }
};