// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import TrackOptions from './TrackOptions.jsx';
import TrackContent from './TrackContent.jsx';

const TRACK_OPTIONS_WIDTH = 128;

const styles: Object = {
  container: {
    backgroundColor: '#95a5a6',
    width: `calc(100% - ${TRACK_OPTIONS_WIDTH}px)`,
    paddingLeft: TRACK_OPTIONS_WIDTH + 1,
    position: 'relative',
    margin: 2,
  },
}

type Props = {
  classes: Object,
  children: Object,
  track: Object,
};

type State = {};


class Track extends React.Component<Props, State> {
  render() {
    const { classes, track } = this.props;

    return (
      <div className={classes.container}>
        <TrackOptions width={TRACK_OPTIONS_WIDTH} />
        <TrackContent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gui: state.gui,
})


Track = connect(mapStateToProps)(Track);
Track = injectSheet(styles)(Track);
export default Track;
