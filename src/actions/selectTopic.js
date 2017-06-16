import Constants from '../constants';

const {
  actionTypes,
  // helpers
} = Constants;

export const selectTopic = (topic) => ({
  type: actionTypes.SELECT_TOPIC,
  topic
})
export const setShareTopicType = (topic, type) => ({
  type: actionTypes.SET_SHARE_TOPIC,
  shareType: type,
  topic,
})
export const shareOrOpenTopic = (topic) => {
  return dispatch => {
    return
  }
}
