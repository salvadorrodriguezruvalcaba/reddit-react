import React from 'react';
import PropTypes from 'prop-types';
import TopicStat from './TopicStat';
import constants from '../../constants';
import unknown from '../../assets/images/unknown.png';
import './Topic.css';

const { helpers } = constants;
const {
  formatVotes,
  isValidURL,
} = helpers;

const isValidImageURL = (thumbnail) =>
  isValidURL(thumbnail) ? thumbnail : unknown;
const Topic = ({
  topic,
  handleClick,
}) => (
  <div className='Topic' onClick={() => handleClick(topic)}>
    <img
      className='Topic-thumbnail'
      src={isValidImageURL(topic.data.thumbnail)}
      alt={topic.title}
    />
    {
      /* NB:
        `Topic-details` is `flex-direction: column`,
        `Topic-stats' is `flex-direction: row`.
        Hence the need for extra `<div>`s.
      */
    }
    <div className='Topic-details'>
      <p className='Topic-author'>
        {topic.data.author}
      </p>
      <p className='Topic-title'>
        {topic.data.title}
      </p>
      <div className='Topic-stats'>
        <TopicStat
          statData={topic.data.num_comments}
          statHelper={formatVotes}
          statType='comment'
        />
        <TopicStat
          statData={topic.data.ups}
          statHelper={formatVotes}
          statType='up'
        />
        <TopicStat
          statData={topic.data.downs}
          statHelper={formatVotes}
          statType='down'
        />
      </div>
    </div>
  </div>
);

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default Topic;
