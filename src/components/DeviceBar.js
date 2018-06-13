// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    border: '1px solid tomato',
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
        hello from devicebar
      </div>
    );
  }
}

DeviceBar = injectSheet(styles)(DeviceBar);
export default DeviceBar;
