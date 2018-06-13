// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles: Object = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 22,
    width: '100%',
    '-webkit-app-region': 'drag',
  }
}

type Props = {
  classes: Object,
};

type State = {};

class TitleBar extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

TitleBar = injectSheet(styles)(TitleBar);
export default TitleBar;
