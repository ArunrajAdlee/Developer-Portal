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
      profile: payload,
      profileApiStatus: profileConstants.GET_PROFILE_SUCCESS,
    }),
    GET_PROFILE_FAILURE: (state) => ({
      ...state,
      profile: null,
      profileApiStatus: profileConstants.GET_PROFILE_FAILURE,
    }),
    DELETE_PROFILE_EXPERIENCE_START: (state) => ({
      ...state,
    }),
    DELETE_PROFILE_EXPERIENCE_SUCCESS: (state, { payload }) => ({
      ...state,
      profile: payload,
    }),
    DELETE_PROFILE_EXPERIENCE_FAILURE: (state) => ({
      ...state,
    }),
  },
  initialStates
);
