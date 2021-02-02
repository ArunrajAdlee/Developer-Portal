import { createAction } from 'redux-actions';
import { authConstants, globalAlertConstants, appConstants, profileConstants } from '../constants';
import { v4 as uuidv4 } from 'uuid';

//--------APP ACTIONS----------
export const startBootstrap = createAction(appConstants.START_BOOTSTRAP);
export const setIsLoaded = createAction(appConstants.SET_IS_LOADED);

//--------------------------------

//--------AUTH ACTIONS----------
export const registerStart = createAction(authConstants.REGISTER_START);
export const registerSuccess = createAction(authConstants.REGISTER_SUCCESS);
export const registerFailure = createAction(authConstants.REGISTER_FAILURE);

export const loginStart = createAction(authConstants.LOGIN_START);
export const loginSuccess = createAction(authConstants.LOGIN_SUCCESS);
export const loginFailure = createAction(authConstants.LOGIN_FAILURE);

export const logoutStart = createAction(authConstants.LOGOUT_START);
export const logoutSuccess = createAction(authConstants.LOGOUT_SUCCESS);

export const setIsAuthenticated = createAction(authConstants.SET_IS_AUTHENTICATED);

export const getUserInfoStart = createAction(authConstants.GET_USERINFO_START);
export const getUserInfoSuccess = createAction(authConstants.GET_USERINFO_SUCCESS);
export const getUserInfoFailure = createAction(authConstants.GET_USERINFO_FAILURE);
//--------------------------------

//--------PROFILE ACTIONS----------
export const getProfileStart = createAction(profileConstants.GET_PROFILE_START);
export const getProfileSuccess = createAction(profileConstants.GET_PROFILE_SUCCESS);
export const getProfileFailure = createAction(profileConstants.GET_PROFILE_FAILURE);
//--------------------------------

//--------GLOBAL ALERT ACTIONS----------
export const showAlert = createAction(globalAlertConstants.SHOW_ALERT, ({ msg, type }) => {
  const id = uuidv4();
  return { id, msg, type };
});
export const removeAlert = createAction(globalAlertConstants.REMOVE_ALERT);
export const clearAllAlerts = createAction(globalAlertConstants.CLEAR_ALL);

//--------------------------------
