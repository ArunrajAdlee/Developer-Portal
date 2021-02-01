import { handleActions } from 'redux-actions';
import { profileConstants } from '../constants';

export const initialStates = {
  profile: null,
  profileApiStatus: '',
};

export default handleActions(
  {
    GET_PROFILE_START: (state) => ({
      ...state,
      profileApiStatus: profileConstants.GET_PROFILE_START,
    }),
    GET_PROFILE_SUCCESS: (state, { payload }) => ({
      ...state,
      profile: payload.profile,
      profileApiStatus: profileConstants.GET_PROFILE_SUCCESS,
    }),
    GET_PROFILE_FAILURE: (state) => ({
      ...state,
      profile: null,
      profileApiStatus: profileConstants.GET_PROFILE_FAILURE,
    }),
  },
  initialStates
);
