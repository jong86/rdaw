// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import TrackOptions from './TrackOptions.jsx';
import TrackContent from './TrackContent/TrackContent.jsx';

const styles: Object = {
  container: {
    backgroundColor: '#95a5a6',
    height: props => props.track.gui.height,
    width: props => `calc(100% - ${props.track.gui.optionsWidth}px)`,
    paddingLeft: props => props.track.gui.optionsWidth + 1,
    position: 'relative',
    margin: 8,
    borderRadius: 16,
  },
}

type Props = {
  classes: Object,
  children: Object,
  track: Object,
  trackIndex: number,
};

type State = {};


class Track extends React.Component<Props, State> {
  render() {
    const { classes, trackIndex, track } = this.props;

    return (
      <div className={classes.container}>
        <TrackOptions
          width={track.gui.optionsWidth}
          name={track.name}
          trackIndex={trackIndex}
        />
        <TrackContent
          type={track.type}
          instrument={track.instrument}
          timeline={track.timeline}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    global: state.global,
  }
}


Track = connect(mapStateToProps)(Track);
Track = injectSheet(styles)(Track);
export default Track;
