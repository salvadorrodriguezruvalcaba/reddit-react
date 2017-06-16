import React from 'react';
import { connect } from 'react-redux';

import helpers from '../constants/helperFunctions';
import { toggleOverlayVisibility } from '../actions/overlay';
import Overlay from '../components/DndOverlay/Overlay';

const OverlayWrapper = (props) => (
  <Overlay
    {...props }
    handleCloseOverlay={(id) => props.toggleOverlay(id)}
    emailDroppedItem={(item) => helpers.emailDroppedItem(item)}
    openDroppedItemOnReddit={(item) => helpers.openDroppedItemOnReddit(item)}
  />
)
const mapStateToProps = ({ overlay, topic, lastDroppedItem }) => ({
  overlayIsVisible: overlay.isVisible,
  dndLinkAccepts: overlay.dndLinkAccepts,
  ...topic
})
const mapDispatchToProps = (dispatch) => ({
  // (only toggle visibility when the '#Overlay' background is clicked)
  toggleOverlay: (id) =>
    (id === 'Overlay' || id === 'Overlay-DndContainer') && dispatch(toggleOverlayVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OverlayWrapper)
