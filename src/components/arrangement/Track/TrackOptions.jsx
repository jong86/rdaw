// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles: Object =  {
  container: {
    backgroundColor: 'silver',
    height: '100%',
    width: props => props.width,
    position: 'absolute',
    left: 0,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class Default extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}


export default (
  injectSheet(styles)(
    Default
  )
);
