import * as toggleAppMenu from '../actionTypes/toggleAppMenu';

export default (state= { appMenuShow: false }, action) => {
  console.log('FROM REDUCER');
  switch (action.type) {
    case toggleAppMenu.OPEN: 
    case toggleAppMenu.CLOSE:
      return { ...state, appMenuShow: !state.appMenuShow };
    default:
      return state;
  }
};