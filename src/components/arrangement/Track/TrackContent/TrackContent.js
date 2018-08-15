// @flow
import React from 'react';
import Measure from 'react-measure'
import injectSheet from 'react-jss';
import type { rectDimensions } from '../../../../defs/defs.js.flow';
import Sequencer from './Sequencer.js';
import { connect } from 'react-redux';

const styles: Object = {
  container: {
    height: '100%',
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
  trackIndex: number,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  node: Object = React.createRef();

  render() {
    const { classes, instrument, trackIndex } = this.props

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
              {instrument === "DRUMS" &&
                <Sequencer
                  trackIndex={trackIndex}
                  containerWidth={width}
                  containerHeight={height}
                />
              }
            </div>
          )
        }}
      </Measure>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    instrument: state.tracks[ownProps.trackIndex].instrument,
  }
}

TrackContent = connect(mapStateToProps)(TrackContent);
TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;