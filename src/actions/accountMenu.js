import * as accountMenu from '../actionTypes/accountMenu';

export const openAccountMenu = el => ({ type: accountMenu.OPEN, payload: el });
export const closeAccountMenu = () => ({ type: accountMenu.CLOSE });