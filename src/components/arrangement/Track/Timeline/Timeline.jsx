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
  parentNode: Object,
};

type State = {};

class Timeline extends React.Component<Props, State> {
  render() {
    const { classes, parentNode } = this.props

    const dimensions = {
      height: parentNode.offsetHeight,
      // right: parentNode.current.clientWidth,
    }

    console.log('dimensions', dimensions);

    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <GridLine
            x1={0}
            y1={0}
            x2={0}
            y2={50}
          />
        </Layer>
      </Stage>
    );
  }
}

Timeline = injectSheet(styles)(Timeline);
export default Timeline;
