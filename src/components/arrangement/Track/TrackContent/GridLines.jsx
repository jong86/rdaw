// @flow
import React from 'react';
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
  vStart: number,
  hEnd: number,
  vEnd: number,
  hLength: number,
  vLength: number,
  hSpacing: number,
  vSpacing: number,
  hColor: 'string',
  vColor: 'string',
};

type State = {};

type lineOptions = {
  direction: string,
  start: number,
  end: number,
  length: number,
  spacing: number,
  color: string,
}

function lines({ direction, start, end, length, spacing, color}: lineOptions): Array<Object> {
  const dimensionUnits = arrayFrom(start, end);

  const array = [];

  for (let i = start; i < end; i += spacing) {
    let x1, y1, x2, y2;

    if (direction === 'horizontal') {
      x1 = 0;
      y1 = i;
      x2 = length;
      y2 = i;

    } else if (direction === 'vertical') {
      x1 = i;
      y1 = 0;
      x2 = i;
      y2 = length;
    }

    array.push(
      <Line
        key={i}
        points={[x1, y1, x2, y2]}
        stroke={color}
        strokeWidth={1}
      />
    )
  }

  return array;
}

class GridLines extends React.Component<Props, State> {
  render() {
    const {
      classes,
      horizontal,
      vertical,
      hStart,
      vStart,
      hEnd,
      vEnd,
      hLength,
      vLength,
      hSpacing,
      vSpacing,
      hColor,
      vColor,
    } = this.props

    let horizontalLines, verticalLines;

    if (horizontal) {
      horizontalLines = lines({
        direction: 'horizontal',
        start: hStart,
        end: hEnd,
        length: hLength,
        spacing: vSpacing,
        color: hColor,
      });
    }

    if (vertical) {
      verticalLines = lines({
        direction: 'vertical',
        start: vStart,
        end: vEnd,
        length: vLength,
        spacing: hSpacing,
        color: vColor,
      });
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
