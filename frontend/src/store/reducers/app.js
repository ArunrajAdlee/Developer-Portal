import { handleActions } from 'redux-actions';

export const initialStates = {
  isLoaded: false,
};

export default handleActions(
  {
    SET_IS_LOADED: (state, payload) => ({
      ...state,
      isLoaded: payload,
    }),
  },
  initialStates
);
