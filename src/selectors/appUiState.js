import { createSelector } from 'reselect';

const getUiState = state => state.ui;

export const makeGetAppUiState = () => createSelector(
  getUiState,
  uiState => uiState
);