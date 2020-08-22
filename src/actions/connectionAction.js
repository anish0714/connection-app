import {
  GET_DATA,
  SET_LOADING,
  LOG_ERROR,
  SEARCH_CONTACTS,
} from './types';

export const getData = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch(
      `https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5`,
    );
    const data = await res.json();
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOG_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const searchContacts = (value) => (dispatch) => {
  dispatch({
    type: SEARCH_CONTACTS,
    payload: value,
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
