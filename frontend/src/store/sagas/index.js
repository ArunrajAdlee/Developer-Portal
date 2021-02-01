import { all } from 'redux-saga/effects';
import { watchUserAuth } from './authSagas';
import { watchApp } from './appSagas';
import { watchProfileAuth } from './profileSagas';

export default function* rootSaga() {
  yield all([watchUserAuth(), watchApp(), watchProfileAuth()]);
}
