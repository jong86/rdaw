// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles: Object =  {
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

class Default extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

Default = injectSheet(styles)(Default);
export default Default;
