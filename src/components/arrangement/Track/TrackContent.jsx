// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Timeline from './Timeline/Timeline.jsx';

const styles: Object = {
  container: {
    height: '192px',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  }
}

type Props = {
  classes: Object,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  node: Object;

  constructor() {
    super();
    this.node = React.createRef();
  }

  render() {
    const { classes } = this.props

    return (
      <div
        className={classes.container}
        ref={this.node}
      >
        <Timeline containerNode={this.node} />
      </div>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;