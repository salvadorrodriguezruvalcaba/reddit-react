import React from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';
import './TopicsList.css';

/* NB: <Topic />'s click handler sets the Overlay Visibility
* and also dispatches the selected Topic's props to the store
*/
const TopicsList = ({
  topics,
  handleTopicClick,
}) => (
  <div className='TopicsList'>
    {
      topics ?
      topics.map((topic, i) =>
        <Topic topic={topic} key={i} handleClick={(topic) => handleTopicClick(topic)} />
      )
      : <div className='TopicsList-noTopics'></div>
    }
  </div>
);
TopicsList.PropTypes = {
  topics: PropTypes.array,
  handleTopicClick: PropTypes.func.isRequired,
}

export default TopicsList
