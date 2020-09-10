import { put, takeLatest, all, delay } from 'redux-saga/effects';
import * as actions from './homeActions';
import { SEARCH_FILME_REQUEST } from 'containers/Movies/moviesActions';
import { SEARCH_CHARACTER_REQUEST } from 'containers/Characters/charactersActions';

function* debounceSearch({ payload }) {
  yield delay(800); // <= here you debounce <input/> typing
  yield put({ type: SEARCH_FILME_REQUEST, payload: payload });
  yield put({ type: SEARCH_CHARACTER_REQUEST, payload: payload });
}

const sagas = all([takeLatest(actions.SET_SEARCH_TERM, debounceSearch)]);

export default sagas;
