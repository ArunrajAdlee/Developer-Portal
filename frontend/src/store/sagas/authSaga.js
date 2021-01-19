import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure, showAlert } from '../actions';
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
      yield put(showAlert({ msg: 'Invalid Credentials', type: 'error' }));
      yield put(loginFailure());
      return;
    }

    localStorage.setItem('token', data.token);
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(showAlert({ msg: 'Invalid Credentials', type: 'error' }));
    yield put(loginFailure());
  }
}

export function* watchUserAuth() {
  yield takeLatest(authConstants.LOGIN_START, login);
}
