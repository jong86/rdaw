// @flow
import React from 'react';
import { Stage, Layer, Rect } from "react-konva";
import { connect } from 'react-redux';
import { Spring, animated } from 'react-spring/dist/konva';
import { TimingAnimation, Easing } from 'react-spring/dist/addons'


type Props = {
  classes: Object,
  tracks: Object,
  project: Object,
  global: Object,
};

type State = {};

class Playhead extends React.Component<Props, State> {
  render = () => {
    const {
      classes,
      tracks,
      project,
      global
    } = this.props;

    const {
      TitleBar,
      Transport,
    } = global;

    const {
      isPlaying,
      playheadAnimation,
    } = project

    const xOrigin = global.gui.optionsWidth + 1;
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
          <Spring
            native
            from={{
              x: isPlaying ? xOrigin + playheadAnimation.from : xOrigin,
              shadowBlur: 0,
              fill: 'rgb(10,50,19)'
            }}
            to={{
              x: isPlaying ? xOrigin + playheadAnimation.to : xOrigin,
              fill: '#00f',
              width: 1,
              height: height,
            }}
            impl={TimingAnimation}
            config={{
              duration: playheadAnimation.duration,
              easing: Easing.linear
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
