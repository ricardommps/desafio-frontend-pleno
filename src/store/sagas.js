import { all } from 'redux-saga/effects';
import { HomeSagas } from 'containers/Home';
import { MoviesSagas } from 'containers/Movies';
import { CharactersSagas } from 'containers/Characters';

function* Saga() {
  yield all([HomeSagas, MoviesSagas, CharactersSagas]);
}

export default Saga;
