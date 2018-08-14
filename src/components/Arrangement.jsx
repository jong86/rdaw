// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { store } from '../redux/store.js';
import { connect } from 'react-redux';
const state = store.getState();

import Track from './arrangement/Track/Track.jsx';
import type { tracks } from '../defs/defs.js.flow';

const styles: Object = {
  container: {
    backgroundColor: '#222',
    position: 'fixed',
    top: state.global.TitleBar.height,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 0,
  }
}

type Props = {
  classes: Object,
  tracks: tracks,
};

type State = {};

class Arrangement extends React.Component<Props, State> {
  render() {
    const { classes, tracks } = this.props

    const renderTracks = tracks.map((track, index) => {
      return <Track key={index} trackIndex={index} track={track} />
    })

    return (
      <div className={classes.container}>
        {renderTracks}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
  }
}

Arrangement = connect(mapStateToProps)(Arrangement);
Arrangement = injectSheet(styles)(Arrangement);
export default Arrangement;
