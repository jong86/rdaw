// @flow
import React, { Component } from 'react';
import Measure from 'react-measure'
import injectSheet from 'react-jss';
import type { rectDimensions } from '../../../../defs/defs.js.flow';

import Timeline from './Timeline.jsx';
import NoteRows from './NoteRows.jsx';

const styles: Object = {
  container: {
    height: '192px',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
  }
}

type Props = {
  classes: Object,
  type: string,
  instrument: string,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  node: Object = React.createRef();

  render() {
    const { classes, type, instrument } = this.props

    return (
      <Measure
        bounds
      >
        {({ measureRef, contentRect }) => {
          const dimensions: rectDimensions = {
            width: contentRect.bounds.width,
            height: contentRect.bounds.height,
          }

          if (type === 'MIDI') {
            return (
              <div
                className={classes.container}
                ref={measureRef}
              >
                <NoteRows dimensions={dimensions} />
                <Timeline dimensions={dimensions} />
              </div>
            )
          } else {
            return (
              <div
                className={classes.container}
                ref={measureRef}
              >
                This is an audio track
              </div>
            )
          }
        }}
      </Measure>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;