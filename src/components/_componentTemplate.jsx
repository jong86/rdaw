// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    backgroundColor: 'tomato',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 256,
    width: '100%',
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
