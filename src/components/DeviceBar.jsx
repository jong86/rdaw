// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { store } from '../redux/store.js';
const state = store.getState();

import MonoSynth from './devices/instruments/MonoSynth.jsx';

const styles: Object = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: state.gui.DeviceBar.height,
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 1,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class DeviceBar extends React.Component<Props, State> {
  /* To display instruments/effects for whatever the selectedTrack is (in redux) */


  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <MonoSynth />
      </div>
    );
  }
}

DeviceBar = injectSheet(styles)(DeviceBar);
export default DeviceBar;
