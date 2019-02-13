import * as fetchInitialState from '../actionTypes/fetchInitialState';

export const request = (isRequestSent= true) => ({ type: fetchInitialState.REQUEST, payload: { isRequestSent } });
export const success = fetchedData => ({ type: fetchInitialState.SUCCESS, payload: { ...fetchedData } });
export const failure = err => ({ type: fetchInitialState.FAILURE, payload: { isError: true, error: err } });