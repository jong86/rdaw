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
    const { classes } = this.props

    return (
      <Rect
        x={100}
        y={300}
        width={100}
        height={100}
        fill={'#0f0'}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    Playhead: state.global.Playhead,
  }
}

Playhead = connect(mapStateToProps)(Playhead);
export default Playhead;
