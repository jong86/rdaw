// @flow
import { combineReducers } from 'redux'
import initialState from '../initialState';

import arrangement from './arrangement';
import mixer from './mixer';
import gui from './gui';

const appReducer = combineReducers({
  arrangement,
  mixer,
  gui,
})

export default (state: Object, action: Object): Object => {
  return appReducer(state, action);
};