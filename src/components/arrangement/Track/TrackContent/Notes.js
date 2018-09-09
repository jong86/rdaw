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
  handleClickNote = (startsAt, id) => {
    console.log("You clicked note", event)
    this.props.deleteNote({
      trackIndex: this.props.trackIndex,
      timelineIndex: startsAt,
      id: id,
    })
  }


  render() {
    const { timeline, gridHSpacing, gridVSpacing } = this.props

    const Note = ({ midiNum, startsAt, duration, id }) => {
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
          onClick={() => this.handleClickNote(startsAt, id)}
        />
      )
    }

    return (
      <Layer>
        {timeline.map((division, index) =>
          division && division.map(note =>
            note && <Note
              key={note.id}
              id={note.id}
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

const mapDispatchToProps = dispatch => ({
  deleteNote: options => dispatch({
    type: 'DELETE_NOTE',
    options,
  })
})

Notes = connect(mapStateToProps, mapDispatchToProps)(Notes);
export default Notes;
