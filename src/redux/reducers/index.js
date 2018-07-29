// @flow
import { combineReducers } from 'redux'
import initialState from '../initialState';

import tracks from './tracks';
import global from './global';

const appReducer = combineReducers({
  tracks,
  global,
})

export default (state: Object, action: Object): Object => {
  return appReducer(state, action);
};