import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure, showAlert, getUserInfoFailure, getUserInfoSuccess } from '../actions';
import { authConstants } from '../constants';
import { login, getUserInformation } from '../../api';
import { server } from '../../server';

export function* loginSaga(params) {
  try {
    const apiParams = {
      email: params.payload.email,
      password: params.payload.password,
    };

    const { data, error } = yield call(login, apiParams);

    if (error) {
      yield put(showAlert({ msg: 'Invalid Credentials', type: 'error' }));
      yield put(loginFailure());
      return;
    }

    localStorage.setItem('token', data.token);
    server.defaults.headers.common['x-auth-token'] = data.token;

    yield put(loginSuccess(data));
  } catch (e) {
    yield put(showAlert({ msg: 'Invalid Credentials', type: 'error' }));
    yield put(loginFailure());
  }
}

export function* getUserInfoSaga() {
  if (localStorage.getItem('token')) {
    try {
      const token = localStorage.getItem('token');

      if (!server.defaults.headers.common['x-auth-token']) {
        server.defaults.headers.common['x-auth-token'] = token;
      }

      const { data, error } = yield call(getUserInformation);

      if (error) {
        yield put(getUserInfoFailure());
        return;
      }

      yield put(getUserInfoSuccess({ user: data, token }));
    } catch (e) {
      yield put(getUserInfoFailure());
    }
  } else {
    yield put(getUserInfoFailure());
  }
}

export function* watchUserAuth() {
  yield takeLatest(authConstants.LOGIN_START, loginSaga);
  yield takeLatest(authConstants.GET_USERINFO_START, getUserInfoSaga);
}
