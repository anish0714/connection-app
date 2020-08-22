import {
  GET_DATA,
  LOG_ERROR,
  SET_LOADING,
  SEARCH_CONTACTS,
} from '../actions/types';

const initialState = {
  dataItem: null,
  tempData: null,
  loading: false,
  error: null,
};

export const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        dataItem: action.payload,
        tempData: action.payload,
        loading: false,
      };
    case SEARCH_CONTACTS:
      // console.log(action.payload);
      return {
        ...state,
        dataItem: state.tempData.filter((contact) => {
          let contactLowerCase = (
            contact.firstname +
            ' ' +
            contact.surname
          ).toLowerCase();
          let searchTermLowerCase = action.payload.toLowerCase();
          return contactLowerCase.indexOf(searchTermLowerCase) > -1;
        }),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOG_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
