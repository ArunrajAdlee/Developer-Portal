import { call, put, takeLatest } from 'redux-saga/effects';
import {
  setIsAuthenticated,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
} from '../actions';
import { authConstants } from '../constants';
import { getUserInfo } from '../../api';

export function* login(params) {
  try {
    const apiParams = {
      email: params.payload.email,
      password: params.payload.password,
    };

    const { data, error } = yield call(getUserInfo, apiParams);

    if (error) {
      yield put(fetchUserInfoFailure());
      return;
    }

    console.log(data);

    yield put(setIsAuthenticated(true));
    yield put(fetchUserInfoSuccess(data));
  } catch (e) {
    yield put(fetchUserInfoFailure());
  }
}

export function* watchUserAuth() {
  yield takeLatest(authConstants.FETCH_USERINFO_START, login);
}
