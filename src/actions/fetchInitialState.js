import { createAction } from 'redux-starter-kit';
import * as fetchInitialState from '../actionTypes/fetchInitialState';

export const request = createAction(fetchInitialState.REQUEST);
export const success = createAction(fetchInitialState.SUCCESS);
export const failure = createAction(fetchInitialState.FAILURE);