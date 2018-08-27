// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { Layer, Rect } from "react-konva";
import { connect } from 'react-redux';

type Props = {
  classes: Object,
  tracks: Object,
  TitleBar: Object,
};

type State = {};

class Playhead extends React.Component<Props, State> {
  render() {
    const { classes, tracks, Playhead, global } = this.props;
    const { TitleBar, Transport } = global;

    const xPos = global.gui.optionsWidth + 1;
    const yPos = TitleBar.height + Transport.height;
    const height = tracks.reduce((accumulator, track) => accumulator + track.gui.height, 0)

    return (
      <Rect
        x={xPos}
        y={yPos}
        width={1}
        height={height}
        fill={'#0f0'}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    Playhead: state.global.Playhead,
    global: state.global,
  }
}

Playhead = connect(mapStateToProps)(Playhead);
export default Playhead;
