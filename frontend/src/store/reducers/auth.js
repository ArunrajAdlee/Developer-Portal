import { handleActions } from 'redux-actions';
import { authConstants } from '../constants';

export const initialStates = {
  isAuthenticated: false,
  user: {
    fetchStatus: '',
    token: '',
  },
};

export default handleActions(
  {
    SET_IS_AUTHENTICATED: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }),
    FETCH_USERINFO_START: (state) => ({
      ...state,
      user: {
        ...state.user,
        fetchStatus: authConstants.FETCH_USERINFO_START,
      },
    }),
    FETCH_USERINFO_SUCCESS: (state, { payload }) => ({
      ...state,
      user: {
        token: payload.token,
        fetchStatus: authConstants.FETCH_USERINFO_SUCCESS,
      },
    }),
    FETCH_USERINFO_FAILURE: (state) => ({
      ...state,
      user: {
        ...state.user,
        fetchStatus: authConstants.FETCH_USERINFO_FAILURE,
      },
    }),
  },
  initialStates
);
