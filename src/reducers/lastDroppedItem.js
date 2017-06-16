import Constants from '../constants';

const {
  actionTypes,
  initialState,
} = Constants;

export default (state = initialState.lastDroppedItem, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENTLY_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.topic,
        linkType: action.linkType,
      }
    case actionTypes.SET_LAST_DROPPED_ITEM:
      return {
        ...state,
        ...action.topic,
      };
    default:
      return state;
  }
}
