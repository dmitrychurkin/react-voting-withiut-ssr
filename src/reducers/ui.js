import * as appMenu from '../actionTypes/appMenu';
import * as accountMenu from '../actionTypes/accountMenu';

export default (state= { 
  appMenuShow: false, 
  accountMenuShow: false,
  accountMenuEl: null
}, action) => {
  switch (action.type) {
    case appMenu.OPEN: 
    case appMenu.CLOSE:
      return { ...state, appMenuShow: !state.appMenuShow };
    case accountMenu.OPEN:
      return { ...state, accountMenuShow: !state.accountMenuShow, accountMenuEl: action.payload };
    case accountMenu.CLOSE:
      return { ...state, accountMenuShow: !state.accountMenuShow, accountMenuEl: null };
    default:
      return state;
  }
};