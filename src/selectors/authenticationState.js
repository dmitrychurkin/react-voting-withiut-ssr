import { createSelector } from 'reselect';

const getAuthState = state => state.auth;

export const makeGetAuthState = () => createSelector(
  getAuthState,
  authState => authState
);