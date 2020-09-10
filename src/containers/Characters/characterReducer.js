import {
  SEARCH_CHARACTER_REQUEST,
  SEARCH_CHARACTER_SUCCESS,
  SEARCH_CHARACTER_FAILURE,
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAILURE,
} from './charactersActions';

const initialState = {
  charactersInFlight: false,
  charactersError: false,
  characters: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PEOPLES_REQUEST:
    case SEARCH_CHARACTER_REQUEST: {
      return {
        ...state,
        charactersInFlight: true,
        charactersError: false,
        characters: null,
      };
    }
    case GET_PEOPLES_SUCCESS:
    case SEARCH_CHARACTER_SUCCESS: {
      return {
        ...state,
        charactersInFlight: false,
        charactersError: false,
        characters: payload,
      };
    }
    case GET_PEOPLES_FAILURE:
    case SEARCH_CHARACTER_FAILURE: {
      return {
        ...state,
        charactersInFlight: false,
        charactersError: false,
        characters: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
