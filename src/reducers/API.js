import Constants from '../constants';

const { initialState, actionTypes } = Constants;

export default (state = initialState.API, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_VALUE_CHANGE:
      return {
        ...state,
        searchValue: action.value,
      }
    case actionTypes.SEARCH_API_START:
      return {
        ...state,
        status: "PENDING",
      }
    case actionTypes.SEARCH_API_SUCCESS:
      return {
        ...state,
        status: "SUCCESS",
        data: action.data,
      }
    case actionTypes.SEARCH_API_ERROR:
      return {
        ...state,
        status: "ERROR",
        error: action.error,
      }
    default:
      return state;
  }
};
