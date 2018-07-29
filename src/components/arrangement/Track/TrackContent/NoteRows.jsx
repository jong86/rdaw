// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import GridLine from './GridLine.jsx';
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
  dimensions: Object,
};

type State = {};

class NoteRows extends React.Component<Props, State> {
  render() {
    const { classes, dimensions } = this.props
    const heightUnits = arrayFrom(0, dimensions.height);

    const horizontalGridLines = heightUnits.map((unit: number, index: number): ?Object => {
      if (index % (dimensions.height / 16) === 0) {
        return (
          <GridLine
            key={index}
            x1={0}
            y1={index}
            x2={dimensions.width}
            y2={index}
            color="silver"
          />
        )
      }
    })

    return (
      <Stage
        className={classes.container}
        width={dimensions.width}
        height={dimensions.height}
      >
        <Layer>
          {horizontalGridLines}
        </Layer>
      </Stage>
    );
  }
}

NoteRows = injectSheet(styles)(NoteRows);
export default NoteRows;
