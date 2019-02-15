import * as toggleAppMenu from '../actionTypes/toggleAppMenu';

export default (state= { appMenuShow: false }, action) => {
  switch (action.payload) {
    case toggleAppMenu.OPEN: 
    case toggleAppMenu.CLOSE:
      return { ...state, appMenuShow: !state.appMenuShow };
    default:
      return state;
  }
};