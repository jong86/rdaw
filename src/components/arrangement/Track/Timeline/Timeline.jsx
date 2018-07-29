// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import GridLine from './GridLine.jsx';



const styles: Object = {
  container: {
    backgroundColor: 'tomato',
    height: 16,
    width: 16,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class Timeline extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={0}
            y={10}
            width={50}
            height={50}
            fill='green'
            draggable
            cornerRadius={16}
          />
          <GridLine />
        </Layer>
      </Stage>
    );
  }
}

Timeline = injectSheet(styles)(Timeline);
export default Timeline;
