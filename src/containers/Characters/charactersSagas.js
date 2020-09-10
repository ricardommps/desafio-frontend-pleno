import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from './charactersActions';
import * as swapiService from 'services/swapiService';

function* searchCharacterSagas({ payload }) {
  try {
    const { data } = yield call(swapiService.searchPeople, payload);
    yield put(actions.searchCharacterSuccess(data));
  } catch (e) {
    yield put(actions.searchCharacterFailure(e));
  }
}

function* getPeoplesSagas() {
  try {
    const { data } = yield call(swapiService.peoples);
    yield put(actions.getPeoplesSuccess(data));
  } catch (e) {
    yield put(actions.getPeoplesFailure(e));
  }
}

const sagas = all([
  takeLatest(actions.SEARCH_CHARACTER_REQUEST, searchCharacterSagas),
  takeLatest(actions.GET_PEOPLES_REQUEST, getPeoplesSagas),
]);

export default sagas;
