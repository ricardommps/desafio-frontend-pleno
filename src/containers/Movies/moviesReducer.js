import {
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
  SEARCH_FILME_REQUEST,
  SEARCH_FILME_SUCCESS,
  SEARCH_FILME_FAILURE,
} from './moviesActions';

const initialState = {
  moviesInFlight: false,
  moviesError: false,
  movies: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FILMS_REQUEST:
    case SEARCH_FILME_REQUEST: {
      return {
        ...state,
        moviesInFlight: true,
        moviesError: false,
        movies: null,
      };
    }
    case GET_FILMS_SUCCESS:
    case SEARCH_FILME_SUCCESS: {
      return {
        ...state,
        moviesInFlight: false,
        moviesError: false,
        movies: payload,
      };
    }
    case GET_FILMS_FAILURE:
    case SEARCH_FILME_FAILURE: {
      return {
        ...state,
        moviesInFlight: false,
        moviesError: false,
        movies: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
