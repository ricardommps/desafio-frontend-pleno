import { combineReducers } from 'redux';
import { MoviesReducer } from 'containers/Movies';
import { CharacterReducer } from 'containers/Characters';

const reducers = combineReducers({
  movies: MoviesReducer,
  character: CharacterReducer,
});

export default reducers;
