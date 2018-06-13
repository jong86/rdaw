// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import MonoSynth from './devices/instruments/MonoSynth.jsx';

const styles = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: 188,
    width: '100%',
    padding: 8,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class DeviceBar extends React.Component<Props, State> {
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
