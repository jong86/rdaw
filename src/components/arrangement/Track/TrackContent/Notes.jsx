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

    const Note = ({ midiNote, timelineIndex }) => {
      const hMultiplier = timelineIndex / 4096;
      const vMultiplier = midiNote - 21;

      return (
        <Rect
          width={(gridHSpacing * 1) - 1}
          height={gridVSpacing - 1}
          x={gridHSpacing * hMultiplier}
          y={gridVSpacing * vMultiplier}
          fill="#a00"
          stroke="#333"
          strokeWidth={0}
          opacity={1}
        />
      )
    }

    // -Need to create array of notes from all initiator note frames
    // -Measure length from all the continuation note frames
    // -Remember, this is just for display purposes, the actual audio engine will read from the timeline state



    return (
      <Layer>
        <Note midiNote={24} timelineIndex={4096}/>
      </Layer>
    );
  }
}

export default Notes;
