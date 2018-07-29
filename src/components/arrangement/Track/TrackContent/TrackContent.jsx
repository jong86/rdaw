// @flow
import React, { Component } from 'react';
import Measure from 'react-measure'
import injectSheet from 'react-jss';
import type { rectDimensions } from '../../../../defs/defs.js.flow';

// import Timeline from './Timeline.jsx';
// import NoteRows from './NoteRows.jsx';
import Sequencer from './Sequencer.jsx';

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
          const { width, height } = contentRect.bounds;

          return (
            <div
              className={classes.container}
              ref={measureRef}
            >
              {instrument === "DRUMS" && <Sequencer containerWidth={width} containerHeight={height} />}
            </div>
          )
        }}
      </Measure>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;