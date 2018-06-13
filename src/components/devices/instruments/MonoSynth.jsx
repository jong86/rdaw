// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Device from '../Device.jsx';

const styles = {
  container: {
  }
}

type Props = {
  classes: Object,
};

type State = {};

class MonoSynth extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <Device className={classes.container} name="MonoSynth">
        
      </Device>
    );
  }
}

MonoSynth = injectSheet(styles)(MonoSynth);
export default MonoSynth;
