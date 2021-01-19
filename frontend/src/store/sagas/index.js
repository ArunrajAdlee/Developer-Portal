import { all } from 'redux-saga/effects';
import { watchUserAuth } from './authSagas';
import { watchApp } from './appSagas';

export default function* rootSaga() {
  yield all([watchUserAuth(), watchApp()]);
}
