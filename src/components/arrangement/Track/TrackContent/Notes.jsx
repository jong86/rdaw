// @flow
import React from 'react';
import Konva from "konva";
import { Layer, Rect } from "react-konva";

type Props = {
  timeline: Array<Array<Object>>,
  gridVSpacing: number,
  gridHSpacing: number,
};

type State = {};

class Notes extends React.Component<Props, State> {
  render() {
    const { timeline, gridHSpacing, gridVSpacing } = this.props

    return (
      <Layer>
        <Rect
          height={gridVSpacing - 1}
          width={(gridHSpacing * 1) - 1}
          x={1}
          y={0}
          fill="#a00"
          stroke="#333"
          strokeWidth={0}
          opacity={1}
        />
      </Layer>
    );
  }
}

export default Notes;
