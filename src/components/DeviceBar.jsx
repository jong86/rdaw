// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import MonoSynth from './devices/instruments/MonoSynth.jsx';

const styles: Object = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: props => props.global.DeviceBar.height,
    width: '100%',
    padding: props => props.global.theme.paddingMd,
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

const mapStateToProps = state => {
  return {
    global: state.global
  }
}

DeviceBar = connect(mapStateToProps)(DeviceBar);
DeviceBar = injectSheet(styles)(DeviceBar);
export default DeviceBar;
