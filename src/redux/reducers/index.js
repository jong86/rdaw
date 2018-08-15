// @flow
import { combineReducers } from 'redux'
import initialState from '../initialState';

import tracks from './tracks';
import global from './global';
import project from './project';

const appReducer = combineReducers({
  tracks,
  global,
  project,
})

export default (state: Object, action: Object): Object => {
  return appReducer(state, action);
};