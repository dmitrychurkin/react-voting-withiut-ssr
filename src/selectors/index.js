import { createSelector } from 'reselect';

const getUiState = state => state.ui;

export const makeGetAppMenuState = () => createSelector(
  getUiState,
  uiState => uiState.appMenuShow
);