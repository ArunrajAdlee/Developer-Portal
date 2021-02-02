import { call, put, takeLatest } from 'redux-saga/effects';
import { getProfileSuccess, getProfileFailure, showAlert } from '../actions';
import { profileConstants } from '../constants';
import { getMyProfileInfo, getProfileInfoByUserId } from '../../api';

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

export function* watchProfileAuth() {
  yield takeLatest(profileConstants.GET_PROFILE_START, getProfileSaga);
}
