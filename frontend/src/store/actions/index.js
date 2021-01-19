import { createAction } from 'redux-actions';
import { authConstants, globalAlertConstants } from '../constants';
import { v4 as uuidv4 } from 'uuid';

//--------AUTH ACTIONS----------
export const loginStart = createAction(authConstants.LOGIN_START);
export const loginSuccess = createAction(authConstants.LOGIN_SUCCESS);
export const loginFailure = createAction(authConstants.LOGIN_FAILURE);
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
export const clearAllAlerts = createAction(globalAlertConstants.CLEAR_ALL);

//--------------------------------
