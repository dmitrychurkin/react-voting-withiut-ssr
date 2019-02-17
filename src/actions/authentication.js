import * as auth from '../actionTypes/authentication';

export const login = () => ({ type: auth.LOGIN });
export const handleAuthentication = () => ({ type: auth.HANDLE_AUTHENTICATION });
export const checkSession = () => ({ type: auth.CHECK_SESSION });
export const logout = () => ({ type: auth.LOGOUT });

export const setIntentedRoute = route => ({ type: auth.SET_INTENTED_ROUTE, payload: route });
export const success = authResult => ({ type: auth.SUCCESS, payload: authResult }); 
export const error = err => ({ type: auth.ERROR, payload: err });