// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { Stage, Layer, Rect } from "react-konva";
import { connect } from 'react-redux';
import audioState from '../music/audioState';

type Props = {
  classes: Object,
  tracks: Object,
  project: Object,
  global: Object,
};

type State = {
  playheadPosition: number,
};

class Playhead extends React.Component<Props, State> {
  state = {
    playheadPosition: audioState.playheadPosition,
  }

  componentDidMount() {
    document.addEventListener('reactUpdatePlayhead', () => {
      console.log("event received")
      this.setState({
        playheadPosition: audioState.playheadPosition,
      })
    })
  }

  render() {
    const { classes, tracks, project, global } = this.props;
    const { TitleBar, Transport } = global;

    const xPos = global.gui.optionsWidth + 1 + (audioState.playheadPosition / 8);
    const yPos = TitleBar.height + Transport.height;
    const height = tracks.reduce((accumulator, track) => accumulator + track.gui.height, 0)

    return (
      <Stage
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Rect
            x={xPos}
            y={yPos}
            width={1}
            height={height}
            fill={'#0f0'}
          />
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    project: state.project,
    global: state.global,
  }
}

Playhead = connect(mapStateToProps)(Playhead);
export default Playhead;
