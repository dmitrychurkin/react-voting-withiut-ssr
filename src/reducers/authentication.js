import * as auth from '../actionTypes/authentication';

export default (state= {
  userProfile: null,
  isAuthenticated: false,
  accessToken: null,
  idToken: null, 
  expiresAt: 0,
  error: null,
  intentedRoute: ''
}, action) => {
  switch (action.type) {
    case auth.SUCCESS: {
      const { accessToken, idToken, expiresIn, userProfile } = action.payload;
      const expiresAt = (expiresIn * 1000) + new Date().getTime();
      return { ...state, isAuthenticated: true, accessToken, idToken, expiresAt, userProfile };
    }
    case auth.ERROR: {
      const error = action.payload;
      return { ...state, error };
    }
    case auth.SET_INTENTED_ROUTE: {
      const intentedRoute = action.payload;
      return { ...state, intentedRoute };
    }
    case auth.LOGOUT: {
      return { ...state, userProfile: null, isAuthenticated: false, accessToken: null, idToken: null, expiresAt: 0 };
    }
    default: 
      return state;
  }
};
