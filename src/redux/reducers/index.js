// @flow
import { combineReducers } from 'redux'
import initialState from '../initialState';

import tracks from './tracks';
import gui from './gui';

const appReducer = combineReducers({
  tracks,
  gui,
})

export default (state: Object, action: Object): Object => {
  return appReducer(state, action);
};