import * as toggleAppMenu from '../actionTypes/toggleAppMenu';

export const openAppMenu = () => ({ type: toggleAppMenu.OPEN, payload: null });
export const closeAppMenu = () => ({ type: toggleAppMenu.CLOSE, payload: null });
