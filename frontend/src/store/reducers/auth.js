import { handleActions } from 'redux-actions';
import { authConstants } from '../constants';

export const initialStates = {
  isAuthenticated: false,
  loginStatus: '',
  userInfoStatus: '',
  registerStatus: '',
  token: '',
  user: null,
};

export default handleActions(
  {
    SET_IS_AUTHENTICATED: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }),
    REGISTER_START: (state) => ({
      ...state,
      registerStatus: authConstants.REGISTER_START,
    }),
    REGISTER_SUCCESS: (state, { payload }) => ({
      ...state,
      registerStatus: authConstants.REGISTER_SUCCESS,
      token: payload.token,
    }),
    REGISTER_FAILURE: (state) => ({
      ...state,
      registerStatus: authConstants.REGISTER_FAILURE,
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
    LOGOUT_START: (state) => ({
      ...state,
    }),
    LOGOUT_SUCCESS: (state) => ({
      ...state,
      token: '',
      loginStatus: '',
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
