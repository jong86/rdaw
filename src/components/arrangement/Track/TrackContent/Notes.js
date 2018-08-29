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
      const xPosMultiplier = startsAt / 1024;
      const yPosMultiplier = midiNum - 21;

      return (
        <Rect
          width={(length / gridHSpacing) - 2}
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
        {notes.map(note => (
          <Note
            key={note.id}
            midiNum={note.midiNum}
            startsAt={note.startsAt}
            length={note.length}
          />
        ))}
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
