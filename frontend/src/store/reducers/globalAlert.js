import { handleActions } from 'redux-actions';

export const initialStates = [];

export default handleActions(
  {
    SHOW_ALERT: (state, { payload }) => [...state, payload],
    REMOVE_ALERT: (state, { payload }) =>
      state.filter((alert) => alert.id !== payload.id),
    CLEAR_ALL: () => [],
  },
  initialStates
);
