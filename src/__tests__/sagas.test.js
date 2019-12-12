import { takeEvery } from 'redux-saga/effects';
import { watchHome } from '../store/sagas';
import { fetchHomeDataSaga } from '../store/sagas/home';
import * as actionTypes from '../store/actions/actionTypes';

describe('Home Sagas', () => {
  it('should dispatch FETCH_STRATEGIES action', () => {
    const generator = watchHome();
    expect(generator.next().value).toEqual(
      takeEvery(actionTypes.FETCH_HOME_DATA, fetchHomeDataSaga)
    );
    expect(generator.next().done).toBeTruthy();
  });
});
