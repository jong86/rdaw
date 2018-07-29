// @flow
import React, { Component } from 'react';
import Measure from 'react-measure'
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
  node: Object = React.createRef();

  render() {
    const { classes } = this.props

    return (
      <Measure
        bounds  
      >
        {({ measureRef, contentRect }) => {
          console.log('contentRect', contentRect);

          return (
            <div
              className={classes.container}
              ref={measureRef}
            >
              <Timeline parentNode={this.node} />
            </div>
          )
        }}
      </Measure>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;