import { createAction } from 'redux-actions';
import { authConstants, globalAlertConstants } from '../constants';
import { v4 as uuidv4 } from 'uuid';

//--------AUTH ACTIONS----------
export const fetchUserInfoStart = createAction(
  authConstants.FETCH_USERINFO_START
);
export const fetchUserInfoSuccess = createAction(
  authConstants.FETCH_USERINFO_SUCCESS
);
export const fetchUserInfoFailure = createAction(
  authConstants.FETCH_USERINFO_FAILURE
);
export const setIsAuthenticated = createAction(
  authConstants.SET_IS_AUTHENTICATED
);
//--------------------------------

//--------GLOBAL ALERT ACTIONS----------
export const showAlert = createAction(
  globalAlertConstants.SHOW_ALERT,
  ({ msg, type }) => {
    const id = uuidv4();
    return { id, msg, type };
  }
);
export const removeAlert = createAction(globalAlertConstants.REMOVE_ALERT);
//--------------------------------
