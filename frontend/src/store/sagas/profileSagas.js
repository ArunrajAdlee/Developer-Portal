import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getProfileSuccess,
  getProfileFailure,
  showAlert,
  deleteProfileExperienceSuccess,
  deleteProfileExperienceFailure,
  addProfileExperienceSuccess,
  addProfileExperienceFailure,
} from '../actions';
import { profileConstants } from '../constants';
import { getMyProfileInfo, getProfileInfoByUserId, deleteProfileExperienceByID, addProfileExperience } from '../../api';

export function* getProfileSaga(params) {
  try {
    let apiResult = null;
    //get profile by userID
    if (params.payload && params.payload.userID) {
      apiResult = yield call(getProfileInfoByUserId, { userID: params.payload.userID });
    } else {
      apiResult = yield call(getMyProfileInfo);
    }

    if (apiResult.error) {
      yield put(getProfileFailure());
      return;
    }

    yield put(getProfileSuccess(apiResult.data));
  } catch (e) {
    yield put(showAlert({ msg: 'Server Error!', type: 'error' }));
    yield put(getProfileFailure());
  }
}

export function* delteProfileExperience(params) {
  try {
    const { data, error } = yield call(deleteProfileExperienceByID, params.payload);

    if (error) {
      yield put(deleteProfileExperienceFailure());
      return;
    }
    yield put(deleteProfileExperienceSuccess(data));
  } catch (e) {
    yield put(showAlert({ msg: 'Server Error!', type: 'error' }));
    yield put(deleteProfileExperienceFailure());
  }
}

export function* addProfileExperienceSaga(params) {
  try {
    const { data, error } = yield call(addProfileExperience, params.payload);

    if (error) {
      yield put(addProfileExperienceFailure());
      return;
    }
    yield put(addProfileExperienceSuccess(data));
  } catch (e) {
    yield put(showAlert({ msg: 'Server Error!', type: 'error' }));
    yield put(addProfileExperienceFailure());
  }
}

export function* watchProfileAuth() {
  yield takeLatest(profileConstants.GET_PROFILE_START, getProfileSaga);
  yield takeLatest(profileConstants.DELETE_PROFILE_EXPERIENCE_START, delteProfileExperience);
  yield takeLatest(profileConstants.ADD_PROFILE_EXPERIENCE_START, addProfileExperienceSaga);
}
