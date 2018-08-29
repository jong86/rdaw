// @flow
import React from 'react';
import { Stage, Layer, Rect } from "react-konva";
import { connect } from 'react-redux';
import { Spring, animated } from 'react-spring/dist/konva';
import { TimingAnimation } from 'react-spring/dist/addons'


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
  render = () => {
    const { classes, tracks, project, global } = this.props;
    const { TitleBar, Transport } = global;
    const { isPlaying, playheadPosition } = project

    const xPosStart = global.gui.optionsWidth + 1 + playheadPosition;
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
          {/* <Rect
            ref={node => {
              this.rect = node;
            }}
            x={xPos}
            y={yPos}
            width={1}
            height={height}
            fill={'#0f0'}
          /> */}
          <Spring
            native
            from={{
              x: xPosStart,
              shadowBlur: 0,
              fill: 'rgb(10,50,19)'
            }}
            to={{
              x: isPlaying ? xPosStart + 1000 : xPosStart,
              fill: '#00f',
              width: 1,
              height: height,
            }}
            impl={TimingAnimation}
            config={{
              duration: 1000,
            }}
          >
            {props => (
              <animated.Rect
                {...props}
                y={yPos}
              />
            )}
          </Spring>
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
