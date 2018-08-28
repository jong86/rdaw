// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import TrackOptions from './TrackOptions.js';
import TrackContent from './TrackContent/TrackContent.js';

const styles = theme => ({
  container: {
    backgroundColor: '#95a5a6',
    height: props => props.track.gui.height,
    width: props => `calc(100% - ${props.global.gui.optionsWidth}px)`,
    paddingLeft: props => props.global.gui.optionsWidth + 1,
    position: 'relative',
  },
})

type Props = {
  classes: Object,
  children: Object,
  track: Object,
  global: Object,
  trackIndex: number,
};

type State = {};

class Track extends React.Component<Props, State> {
  render() {
    const { classes, trackIndex } = this.props;

    return (
      <div className={classes.container}>
        <TrackOptions trackIndex={trackIndex} />
        <TrackContent trackIndex={trackIndex} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    global: state.global,
    track: state.tracks[ownProps.trackIndex]
  }
}

Track = injectSheet(styles, { withTheme: true })(Track);
Track = connect(mapStateToProps)(Track);
export default Track;