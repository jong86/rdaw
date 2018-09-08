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
  type: string,
  instrument: string,
  trackIndex: number,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  node: Object = React.createRef();

  render() {
    /*
    Right this component is kind of useless, may be used for conditional rendering different types
    of track content depending on track type
    */

    const { classes, instrument, trackIndex } = this.props

    return (
      <Sequencer
        trackIndex={trackIndex}
      />
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