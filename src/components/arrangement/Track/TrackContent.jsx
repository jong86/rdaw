// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles: Object = {
  container: {
    height: '192px',
    width: '100%',
  }
}

type Props = {
  classes: Object,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;