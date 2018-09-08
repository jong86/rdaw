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
    width: 'fit-content',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
  }
}

type Props = {
  classes: Object,
  instrument: string,
  trackIndex: number,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  node: Object = React.createRef();

  render() {
    const { classes, instrument, trackIndex } = this.props

    return (
      <React.Fragment>
        {instrument === 'DRUMS' &&
          <Sequencer
            trackIndex={trackIndex}
          />
        }
        {instrument === 'AUDIO' &&
          <div>
          </div>
        }
      </React.Fragment>
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