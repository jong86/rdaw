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

    const Note = ({ midiNum, startsAt, length }) => {
      const xPosMultiplier = startsAt / 4096;
      const yPosMultiplier = midiNum - 21;

      return (
        <Rect
          width={(gridHSpacing * (length / 4096) - 2)}
          height={gridVSpacing - 2}
          x={(gridHSpacing * xPosMultiplier) + 1}
          y={(gridVSpacing * yPosMultiplier) + 1}
          fill="tomato"
          stroke="#a00"
          strokeWidth={0}
          opacity={1}
        />
      )
    }

    // -Need to create array of notes from all initiator note frames
    // -Measure length from all the continuation note frames
    // -Remember, this is just for display purposes, the actual audio engine will read directly from the timeline state
    const notes = []

    timeline.forEach((division, index) => {
      division.forEach(noteFrame => {
        if (noteFrame.type === 'INITIATOR') {
          notes.push({
            id: noteFrame.id,
            midiNum: noteFrame.midiNum,
            startsAt: index,
            length: 1,
          })
        } else if (noteFrame.type === 'CONTINUATION') {
          const index = notes.findIndex(element => element.id === noteFrame.initiatorId)
          notes[index].length += 1
        }
      })
    })

    return (
      <Layer>
        {notes.map(note => <Note key={note.id} midiNum={note.midiNum} startsAt={note.startsAt} length={note.length}/>)}
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
