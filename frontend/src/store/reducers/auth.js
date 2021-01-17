import { handleActions } from 'redux-actions';

export const initialStates = {
  isAuthenticated: false,
  user: {
    fetchStatus: '',
    userInfo: {},
  },
};

export default handleActions(
  {
    SET_IS_AUTHENTICATED: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }),
    FETCH_USERCONTEXT_START: (state) => ({
      ...state,
      user: {
        ...state.user,
        fetchStatus: genericReduxConstants.REDUX_STATUS_START,
      },
    }),
    FETCH_USERCONTEXT_SUCCESS: (state, { payload }) => ({
      ...state,
      user: {
        ...payload,
        fetchStatus: genericReduxConstants.REDUX_STATUS_SUCCESS,
      },
    }),
    FETCH_USERCONTEXT_FAILURE: (state) => ({
      ...state,
      user: {
        ...state.user,
        fetchStatus: genericReduxConstants.REDUX_STATUS_FAILURE,
      },
    }),
  },
  initialStates
);
