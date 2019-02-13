import * as fetchInitialState from '../actionTypes/fetchInitialState';


export default (state= {}, action) => {
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