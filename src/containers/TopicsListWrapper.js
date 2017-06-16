import { connect } from 'react-redux';
import { selectTopic } from '../actions/selectTopic';
import { toggleOverlayVisibility } from '../actions/overlay';
import TopicsList from '../components/Topics/TopicsList';

const mapDispatchToProps = (dispatch) => ({
  handleTopicClick: (topic) => {
    dispatch(toggleOverlayVisibility())
    dispatch(selectTopic(topic))
  },
})

export default connect(null, mapDispatchToProps)(TopicsList);
