// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import GridLines from './GridLines.jsx';
import Notes from './Notes.jsx';
import { arrayFrom } from '../../../../util/arrays';

const styles: Object = {
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }
}

type Props = {
  classes: Object,
  containerWidth: number,
  containerHeight: number,
  timeline: Array<Array<Object>>,
};

type State = {};

class Sequencer extends React.Component<Props, State> {
  render() {
    const { classes, containerWidth, containerHeight, timeline } = this.props

    return (
      <Stage
        width={containerWidth}
        height={containerHeight}
      >
        <GridLines
          horizontal
          hStart={0}
          hEnd={containerHeight}
          hLength={containerWidth}
          hSpacing={32}
          hColor='#666'
          vertical
          vStart={0}
          vEnd={containerWidth}
          vLength={containerHeight}
          vSpacing={containerHeight / 16}
          vColor='#555'
        />

        <Notes timeline={timeline} />
      </Stage>
    );
  }
}

Sequencer = injectSheet(styles)(Sequencer);
export default Sequencer;
