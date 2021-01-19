import { handleActions } from 'redux-actions';
import { authConstants } from '../constants';

export const initialStates = {
  isAuthenticated: false,
  loginStatus: '',
  userInfoStatus: '',
  token: '',
  user: null,
};

export default handleActions(
  {
    SET_IS_AUTHENTICATED: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }),
    LOGIN_START: (state) => ({
      ...state,
      loginStatus: authConstants.LOGIN_START,
    }),
    LOGIN_SUCCESS: (state, { payload }) => ({
      ...state,
      token: payload.token,
      isAuthenticated: true,
      loginStatus: authConstants.LOGIN_SUCCESS,
    }),
    LOGIN_FAILURE: (state) => ({
      ...state,
      token: '',
      loginStatus: authConstants.LOGIN_FAILURE,
      isAuthenticated: false,
      user: null,
    }),
    GET_USERINFO_START: (state) => ({
      ...state,
      userInfoStatus: authConstants.GET_USERINFO_START,
    }),
    GET_USERINFO_SUCCESS: (state, { payload }) => ({
      ...state,
      token: payload.token,
      isAuthenticated: true,
      userInfoStatus: authConstants.GET_USERINFO_SUCCESS,
      user: payload.user,
    }),
    GET_USERINFO_FAILURE: (state) => ({
      ...state,
      token: '',
      userInfoStatus: authConstants.GET_USERINFO_FAILURE,
      isAuthenticated: false,
      user: null,
    }),
  },
  initialStates
);
