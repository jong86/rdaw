// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import GridLines from './GridLines.jsx';
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
};

type State = {};

class Sequencer extends React.Component<Props, State> {
  render() {
    const { classes, containerWidth, containerHeight } = this.props

    return (
      <Stage
        width={containerWidth}
        height={containerHeight}
      >
        <GridLines
          horizontal
          hStart={1}
          hEnd={containerWidth}
          hSpacing={containerHeight / 16}
          hColor='#a00'
          vertical
          vStart={0}
          vEnd={containerWidth}
          vSpacing={32}
          vColor='#0a0'
        />
      </Stage>
    );
  }
}

Sequencer = injectSheet(styles)(Sequencer);
export default Sequencer;
