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

type State = {
  dimensions: {
    width: number,
    height: number,
  }
};

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

          const dimensions: Object = {
            width: contentRect.bounds.width,
            height: contentRect.bounds.height,
          }

          return (
            <div
              className={classes.container}
              ref={measureRef}
            >
              <Timeline dimensions={dimensions} />
            </div>
          )
        }}
      </Measure>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;