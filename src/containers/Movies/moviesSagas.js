import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from './moviesActions';
import * as swapiService from 'services/swapiService';

function* getFilmesSagas() {
  try {
    const { data } = yield call(swapiService.films);
    yield put(actions.getFilmsSuccess(data));
  } catch (e) {
    yield put(actions.getFilmsFailure(e));
  }
}

function* searchFilmSagas({ payload }) {
  try {
    const { data } = yield call(swapiService.searchFilm, payload);
    yield put(actions.searchFilmSuccess(data));
  } catch (e) {
    yield put(actions.searchFilmFailure(e));
  }
}

const sagas = all([
  takeLatest(actions.GET_FILMS_REQUEST, getFilmesSagas),
  takeLatest(actions.SEARCH_FILME_REQUEST, searchFilmSagas),
]);

export default sagas;
