import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../assets/images/icon-sprite.png';
import './Topic.css';

const TopicStat = ({
  isDndTopic, statData, statHelper, statType,
}) => (
  <div className={`Topic-${statType}`}>
    <span className='Topic-stat'>
      <img
        className={`sprite ${statType}s-sprite`}
        src={sprite}
        alt={`${statType}s`}
      />
      <p className='Topic-statDataCount'>
        {isDndTopic ?
          `${statData}` :
          statHelper(statData, statType)
        }
      </p>
    </span>
  </div>
);

TopicStat.propTypes = {
  statData: PropTypes.number.isRequired,
  statHelper: PropTypes.func,
  statType: PropTypes.string.isRequired,
}

export default TopicStat;
