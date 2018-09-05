// @flow
import React from 'react';
import Konva from "konva";
import { Layer, Rect } from "react-konva";
import { connect } from 'react-redux';

type Props = {
  timeline: Array<Array<Object>>,
  gridVSpacing: number,
  gridHSpacing: number,
};

type State = {};


class Notes extends React.Component<Props, State> {
  render() {
    const { timeline, gridHSpacing, gridVSpacing } = this.props

    const Note = ({ midiNum, startsAt, duration }) => {
      const xPosMultiplier = startsAt / 1024;
      const yPosMultiplier = midiNum - 21;

      return (
        <Rect
          width={(duration / gridHSpacing)}
          height={gridVSpacing || 0}
          x={(gridHSpacing * xPosMultiplier) || 0}
          y={(15 * gridVSpacing) - (gridVSpacing * yPosMultiplier) || 0}
          fill="tomato"
          stroke="#222"
          strokeWidth={0}
          opacity={1}
        />
      )
    }

    return (
      <Layer>
        {timeline.map((division, index) =>
          division.map(note =>
            <Note
              key={note.id}
              midiNum={note.midiNum}
              startsAt={index}
              duration={note.duration}
            />
          )
        )}
      </Layer>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    timeline: state.tracks[ownProps.trackIndex].timeline,
  }
}

Notes = connect(mapStateToProps)(Notes);
export default Notes;
