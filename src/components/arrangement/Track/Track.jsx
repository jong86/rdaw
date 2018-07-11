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
    width: '100%',
    position: 'relative',
    paddingLeft: TRACK_OPTIONS_WIDTH + 1,
  },
}

type Props = {
  classes: Object,
  children: Object,
  name: string,
};

type State = {};


class Track extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

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

export default (
  connect(mapStateToProps)(
    injectSheet(styles)(
      Track
  ))
);

