import { createAction } from 'redux-actions';
import { authConstants, globalAlertConstants, appConstants } from '../constants';
import { v4 as uuidv4 } from 'uuid';

//--------APP ACTIONS----------
export const startBootstrap = createAction(appConstants.START_BOOTSTRAP);
export const setIsLoaded = createAction(appConstants.SET_IS_LOADED);

//--------------------------------

//--------AUTH ACTIONS----------
export const loginStart = createAction(authConstants.LOGIN_START);
export const loginSuccess = createAction(authConstants.LOGIN_SUCCESS);
export const loginFailure = createAction(authConstants.LOGIN_FAILURE);

export const setIsAuthenticated = createAction(authConstants.SET_IS_AUTHENTICATED);

export const getUserInfoStart = createAction(authConstants.GET_USERINFO_START);
export const getUserInfoSuccess = createAction(authConstants.GET_USERINFO_SUCCESS);
export const getUserInfoFailure = createAction(authConstants.GET_USERINFO_FAILURE);
//--------------------------------

//--------GLOBAL ALERT ACTIONS----------
export const showAlert = createAction(globalAlertConstants.SHOW_ALERT, ({ msg, type }) => {
  const id = uuidv4();
  return { id, msg, type };
});
export const removeAlert = createAction(globalAlertConstants.REMOVE_ALERT);
export const clearAllAlerts = createAction(globalAlertConstants.CLEAR_ALL);

//--------------------------------
