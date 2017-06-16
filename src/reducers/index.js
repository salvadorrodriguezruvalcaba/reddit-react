import { combineReducers } from 'redux';
import API from './API';
import overlay from './overlay'
import topic from './topic'
import lastDroppedItem from './lastDroppedItem';

const rootReducer = combineReducers({
  API,
  lastDroppedItem,
  overlay,
  topic,
});

export default rootReducer;
