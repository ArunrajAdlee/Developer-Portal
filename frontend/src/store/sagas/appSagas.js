import { call, put, takeLatest } from 'redux-saga/effects';
import { appConstants } from '../constants';
import { getUserInfoSaga } from './authSagas';
import { setIsLoaded } from '../actions';

export function* bootstrapSaga() {
  yield call(getUserInfoSaga);
  yield put(setIsLoaded(true));
}

export function* watchApp() {
  yield takeLatest(appConstants.START_BOOTSTRAP, bootstrapSaga);
}
