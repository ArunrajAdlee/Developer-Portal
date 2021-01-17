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
      email: params.email,
      password: params.password,
    };

    const { data, error } = yield call(getUserInfo);

    if (error) {
      yield put(fetchUserInfoFailure());
      return;
    }

    console.log(data);

    yield put(setIsAuthenticated(true));
    yield put(fetchUserInfoSuccess(payload));
  } catch (e) {
    yield put(fetchUserInfoFailure());
  }
}

export function* watchUserAuth() {
  yield takeLatest(authConstants.FETCH_USERINFO_START, login);
}