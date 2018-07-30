// @flow
import React from 'react';
import Konva from "konva";
import { Layer, Rect } from "react-konva";

type Props = {
  timeline: Array<Array<Object>>,
  noteHeight: number,
  noteWidth: number,
};

type State = {};

class Notes extends React.Component<Props, State> {
  render() {
    const { timeline, noteHeight, noteWidth } = this.props

    return (
      <Layer>
        <Rect
          height={noteHeight}
          width={noteWidth}
          x={0}
          y={0}
          fill="red"
          opacity={0.5}
        />
      </Layer>
    );
  }
}

export default Notes;
