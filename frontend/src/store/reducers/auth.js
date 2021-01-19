import { handleActions } from 'redux-actions';
import { authConstants } from '../constants';

export const initialStates = {
  isAuthenticated: false,
  loginStatus: '',
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
      user: null,
    }),
  },
  initialStates
);
