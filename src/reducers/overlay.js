import Constants from '../constants';

const {
  actionTypes,
  initialState,
} = Constants;

export default (state = initialState.overlay, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_OVERLAY_VISIBILITY:
    return {
      ...state,
      isVisible: !state.isVisible,
    }
    default:
      return state;
  }
}
