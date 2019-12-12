import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { fetchHomeDataSaga } from './home';

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_HOME_DATA, fetchHomeDataSaga);
}
