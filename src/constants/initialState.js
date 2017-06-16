import * as dndTypes from './dndTypes';
export default {
  API: {
    searchValue: '',
    status: 'PENDING',
  },
  overlay: {
    isVisible: false,
    dndLinkAccepts: [
      {
        linkType: 'reddit',
        linkText: 'Open on Reddit',
        accepts: dndTypes.TOPIC_OPEN,
        lastDroppedItem: {},
      },
      {
        linkType: 'mail',
        linkText: 'Email to a Friend',
        accepts: dndTypes.TOPIC_EMAIL,
        lastDroppedItem: {},
      },
    ]
  },
  topic: {},
  lastDroppedItem: {
    selectedItem: {},
    linkType: null,
  },
};
