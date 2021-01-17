import { createAction } from 'redux-actions';
import { authConstants } from '../constants';

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
