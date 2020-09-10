export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';

export const SEARCH_FILME_REQUEST = 'SEARCH_FILME_REQUEST';
export const SEARCH_FILME_SUCCESS = 'SEARCH_FILME_SUCCESS';
export const SEARCH_FILME_FAILURE = 'SEARCH_FILME_FAILURE';

export const getFilms = () => ({
  type: GET_FILMS_REQUEST,
});

export const getFilmsSuccess = data => ({
  type: GET_FILMS_SUCCESS,
  payload: data,
});

export const getFilmsFailure = error => ({
  type: GET_FILMS_FAILURE,
  payload: error,
});

export const searchFilm = title => ({
  type: SEARCH_FILME_REQUEST,
  payload: title,
});

export const searchFilmSuccess = data => ({
  type: SEARCH_FILME_SUCCESS,
  payload: data,
});

export const searchFilmFailure = error => ({
  type: SEARCH_FILME_FAILURE,
  payload: error,
});
