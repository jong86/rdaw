// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Device from '../Device.jsx';
import { Knob } from '../deviceWidgets';


const styles: Object = {
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
      <Device name="MonoSynth">
        <Knob />
      </Device>
    );
  }
}

MonoSynth = injectSheet(styles)(MonoSynth);
export default MonoSynth;
