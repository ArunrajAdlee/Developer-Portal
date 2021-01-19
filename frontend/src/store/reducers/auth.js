import { handleActions } from 'redux-actions';
import { authConstants } from '../constants';

export const initialStates = {
  isAuthenticated: false,
  fetchStatus: '',
  token: '',
  user: null,
};

export default handleActions(
  {
    SET_IS_AUTHENTICATED: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }),
    FETCH_USERINFO_START: (state) => ({
      ...state,
      fetchStatus: authConstants.FETCH_USERINFO_START,
    }),
    FETCH_USERINFO_SUCCESS: (state, { payload }) => ({
      ...state,
      token: payload.token,
      fetchStatus: authConstants.FETCH_USERINFO_SUCCESS,
    }),
    FETCH_USERINFO_FAILURE: (state) => ({
      ...state,
      token: '',
      fetchStatus: authConstants.FETCH_USERINFO_FAILURE,
      user: null,
    }),
  },
  initialStates
);
