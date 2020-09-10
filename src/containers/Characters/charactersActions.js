export const SEARCH_CHARACTER_REQUEST = 'SEARCH_CHARACTER_REQUEST';
export const SEARCH_CHARACTER_SUCCESS = 'SEARCH_CHARACTER_SUCCESS';
export const SEARCH_CHARACTER_FAILURE = 'SEARCH_CHARACTER_FAILURE';

export const GET_PEOPLES_REQUEST = 'GET_PEOPLES_REQUEST';
export const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
export const GET_PEOPLES_FAILURE = 'GET_PEOPLES_FAILURE';

export const searchCharacter = title => ({
  type: SEARCH_CHARACTER_REQUEST,
  payload: title,
});

export const searchCharacterSuccess = data => ({
  type: SEARCH_CHARACTER_SUCCESS,
  payload: data,
});

export const searchCharacterFailure = error => ({
  type: SEARCH_CHARACTER_FAILURE,
  payload: error,
});

export const getPeoples = () => ({
  type: GET_PEOPLES_REQUEST,
});

export const getPeoplesSuccess = data => ({
  type: GET_PEOPLES_SUCCESS,
  payload: data,
});

export const getPeoplesFailure = error => ({
  type: GET_PEOPLES_FAILURE,
  payload: error,
});
