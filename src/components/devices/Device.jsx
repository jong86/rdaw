// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    backgroundColor: '#95a5a6',
    height: '100%',
    width: 'fit-content',
    borderRadius: 8,
  }
}

type Props = {
  classes: Object,
  children: Object,
  name: string,
};

type State = {};

class Device extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        { this.props.name }
        { this.props.children }
      </div>
    );
  }
}

Device = injectSheet(styles)(Device);
export default Device;
