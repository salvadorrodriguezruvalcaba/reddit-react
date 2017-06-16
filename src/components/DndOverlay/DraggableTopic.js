import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import TopicStat from '../Topics/TopicStat';

import '../Topics/Topic.css'
import './DraggableTopic.css';
import helpers from '../../constants/helperFunctions';
import * as D from '../../constants/dndTypes';
const { formatVotes } = helpers;

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  canDrag: monitor.canDrag(),
});
const topicSource = {
  beginDrag(props) {
    // we need to retain the props of the topic being dragged
    console.log(props);
    const topic = { ...props.topic };
    return topic;
  },
};

const DraggableTopic = ({
  connectDragSource, isDragging,
  topic,
}) => topic ?
// If the topic exists in `props`
// connect the DragSource and render.
// Otherwise, return an empty <div>.
connectDragSource(
  <div
    className='DraggableTopic-DndComponent DraggableTopic'
    style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move',
      transition: 'opacity 300ms ease',
    }}>
    <img
      className='Topic-thumbnail'
      src={topic.thumbnail}
      alt={topic.title}
    />
    <h1 className='DraggableTopic-TopicAuthor'>{topic.author}</h1>
    <h2 className='DraggableTopic-TopicTitle'>{topic.title}</h2>
    <div className='DraggableTopic-TopicStatRow'>
      <TopicStat
        className='DraggableTopic-TopicStat'
        isDndTopic={true}
        statData={topic.num_comments}
        statHelper={formatVotes}
        statType='comment'
      />
      <TopicStat
        className='DraggableTopic-TopicStat'
        isDndTopic={true}
        statData={topic.ups}
        statHelper={formatVotes}
        statType='up'
      />
    </div>
  </div>
) :
<div></div>;

DraggableTopic.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  topic: PropTypes.object,
}

/* DragSource expects 3 inputs:
 * `type`, `spec` and a `collect` function.
 * The connected component in question (DraggableTopic) will be
 * curried over to the return value of DragSource.
 * (i.e. DragSource returns a function that takes
 * a React component as its input.)
 */
export default DragSource(D.TOPIC, topicSource, collect)(DraggableTopic);
