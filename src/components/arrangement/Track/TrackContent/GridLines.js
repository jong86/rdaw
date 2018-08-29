// @flow
import React from 'react';
import Konva from "konva";
import { Layer, Line } from "react-konva";
import { arrayFrom } from '../../../../util/arrays';

type Props = {
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
  hColor: string,
  vColor: string,
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
  const array = [];
  let i, x1, y1, x2, y2;

  for (i = start; i < end; i += spacing) {
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

    const isStartOfBar = (i === start || i / spacing % 4 === 0) && direction === 'vertical'

    array.push(
      <Line
        key={i}
        points={[x1, y1, x2, y2]}
        stroke={color}
        opacity={isStartOfBar ? 0.3 : 0.1}
        strokeWidth={isStartOfBar ? 2 : 1}
      />
    )
  }

  return array;
}

class GridLines extends React.Component<Props, State> {
  render() {
    const {
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

export default GridLines;
