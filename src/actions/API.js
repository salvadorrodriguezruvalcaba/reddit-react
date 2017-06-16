import Constants from '../constants';
import axios from 'axios';

const { actionTypes, helpers } = Constants;

export const handleSearchbarChange = (value) => ({
  type: actionTypes.SEARCH_VALUE_CHANGE,
  value
})
export const searchStart = () => ({
  type: actionTypes.SEARCH_API_START,
});
export const searchSuccess = (data) => ({
  type: actionTypes.SEARCH_API_SUCCESS,
  data
});
export const searchError = (error) => ({
  type: actionTypes.SEARCH_API_ERROR,
  error
});
export const subRedditSearch = (subReddit = 'funny') => {
  return dispatch => {
    dispatch(searchStart());
    return axios.get(helpers.subRedditURL(subReddit))
    .then(res => dispatch(searchSuccess(res.data.data.children)))
    .catch(err => dispatch(searchError(err)))
  }
}
