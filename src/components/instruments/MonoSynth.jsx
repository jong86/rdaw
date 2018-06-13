// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    backgroundColor: '#95a5a6',
    height: '100%',
    width: 256,
    borderRadius: 8,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class Template extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

Template = injectSheet(styles)(Template);
export default Template;
