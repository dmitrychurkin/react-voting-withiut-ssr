import * as toggleAppMenu from '../actionTypes/toggleAppMenu';

export const openAppMenu = () => {
  console.log('openAppMenu');
  return { type: toggleAppMenu.OPEN, payload: null };
};
export const closeAppMenu = () => ({ type: toggleAppMenu.CLOSE, payload: null });
