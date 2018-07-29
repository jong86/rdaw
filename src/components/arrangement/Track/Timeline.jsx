// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles: Object = {
  container: {
    backgroundColor: 'tomato',
    height: 16,
    width: 16,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class Timeline extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

Timeline = injectSheet(styles)(Timeline);
export default Timeline;
