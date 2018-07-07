// @flow
import { combineReducers } from 'redux'
import arrangement from './arrangement';
import mixer from './mixer';
import initialState from '../initialState';

const appReducer = combineReducers({
  arrangement,
  mixer,
})

export default (state: Object, action: Object): Object => {
  return appReducer(state, action);
};