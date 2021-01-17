import { all } from 'redux-saga/effects';
import { watchUserAuth } from './authSaga';

export default function* rootSaga() {
  yield all([watchUserAuth()]);
}
