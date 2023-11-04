import { FETCH_ERROR, FETCH_SIDEBAR, FETCH_START, FETCH_SUCCESS, SHOW_MESSAGE } from 'app/utils/constants/reduxActions';

export const fetchSuccess = (message) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: message || '',
    });
  };
};
export const fetchError = (error) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  };
};

export const fetchStart = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_START,
    });
  };
};
export const fetchSidebar = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_SIDEBAR,
      payload: data,
    });
  };
};
export const showMessage = message => {
  return (dispatch) => {
    dispatch({
      type: SHOW_MESSAGE,
      payload: message,
    });
  };
};

