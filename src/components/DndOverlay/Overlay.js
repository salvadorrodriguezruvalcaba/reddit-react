import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableTopic from './DraggableTopic';
import DndLink from './DndLink';
import './Overlay.css';

const Overlay = ({
  overlayIsVisible, topic,
  handleCloseOverlay, emailDroppedItem, openDroppedItemOnReddit,
}) => (
  <div
    className='Overlay'
    id='Overlay'
    /* pass the element's `id` up to OverlayWrapper
    * (only toggle visibility when the background is clicked)
    */
    onClick={(e) => handleCloseOverlay(e.target.id)}
    style={{
      display: !!overlayIsVisible ? 'flex' : 'none',
    }}>
    <div
      style={{
        visiblity: !!overlayIsVisible ? 'visible' : 'hidden',
        opacity: !!overlayIsVisible ? 1 : 0,
        animation: 'fade-in 600ms',
      }}
      className='Overlay-DndContainer'
      id='Overlay-DndContainer'
    >
      <DraggableTopic
        topic={topic}
      />
      <h2 className='Overlay-DragTitle'>
        Drag the card on the left to the desired action
      </h2>
      <div className='Overlay-DndLinkContainer'>
        <DndLink
          linkType={'reddit'}
          shareText={'Open on Reddit'}
          dndType={'topic/open'}
          openDroppedItemOnReddit={(item) => openDroppedItemOnReddit(item)}
        />
        <DndLink
          linkType={'mail'}
          shareText={'Email to a friend'}
          dndType={'topic/mail'}
          emailDroppedItem={(item) => emailDroppedItem(item)}
        />
      </div>
    </div>
  </div>
);
Overlay.propTypes = {
  emailDroppedItem: PropTypes.func.isRequired,
  handleCloseOverlay: PropTypes.func.isRequired,
  openDroppedItemOnReddit: PropTypes.func.isRequired,
  overlayIsVisible: PropTypes.bool.isRequired,
  topic: PropTypes.object,
}

export default DragDropContext(HTML5Backend)(Overlay);
