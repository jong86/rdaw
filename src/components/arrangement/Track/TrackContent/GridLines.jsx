// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Layer, Line } from "react-konva";
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
  horizontal: boolean,
  vertical: boolean,
  hStart: number,
  hEnd: number,
  vStart: number,
  vEnd: number,
  hSpacing: number,
  vSpacing: number,
  hColor: 'string',
  vColor: 'string',
};

type State = {};

function lines(direction: string, start: number, end: number, spacing: number, color: string): Array<Object> {
  const dimensionUnits = arrayFrom(start, end);

  return dimensionUnits.map((unit: number, index: number): any => {
    let x1, y1, x2, y2;

    if (direction === 'horizontal') {
      x1 = 0;
      y1 = index;
      x2 = end;
      y2 = index;

    } else if (direction === 'vertical') {
      x1 = index;
      y1 = 0;
      x2 = index;
      y2 = end;
    }

    if (index % spacing === 0) {
      return (
        <Line
          key={index}
          points={[x1, y1, x2, y2]}
          stroke={color}
          strokeWidth={1}
        />
      )
    }
  })
}

class GridLines extends React.Component<Props, State> {
  render() {
    const {
      classes,
      horizontal,
      vertical,
      hStart,
      hEnd,
      vStart,
      vEnd,
      hSpacing,
      vSpacing,
      hColor,
      vColor,
    } = this.props

    let horizontalLines, verticalLines;


    if (horizontal) {
      horizontalLines = lines('horizontal', hStart, hEnd, hSpacing, hColor);
    }

    if (vertical) {
      verticalLines = lines('vertical', vStart, vEnd, vSpacing, vColor);
    }

    return (
      <Layer>
        {horizontalLines}
        {verticalLines}
      </Layer>
    );
  }
}

GridLines = injectSheet(styles)(GridLines);
export default GridLines;
