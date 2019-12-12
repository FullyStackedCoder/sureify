import { put } from 'redux-saga/effects';

import { getData } from '../../shared/utility';

import * as actions from '../actions/index';

export function* fetchHomeDataSaga(action) {
  yield put(actions.fetchHomeDataStart());

  try {
    const response = yield getData();
    yield put(actions.fetchHomeDataSuccess(response));
  } catch (error) {
    yield put(actions.fetchHomeDataFail(error));
  }
}
