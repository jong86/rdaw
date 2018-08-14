// @flow
import React from 'react';
import Konva from "konva";
import { connect } from 'react-redux';
import { Stage } from "react-konva";
import GridLines from './GridLines.jsx';
import Notes from './Notes.jsx';
import BarBackdrops from './BarBackdrops.jsx';
import { TrackContext } from '../Track.jsx';

type Props = {
  containerWidth: number,
  containerHeight: number,
  timeline: Array<Array<Object>>,
  instrument: string,
  numNotes: Object,
};

type State = {};

class Sequencer extends React.Component<Props, State> {
  handleClick(event, hSpacing, vSpacing, trackIndex) {
    const { offsetX, offsetY } = event.evt;
    const row = Math.floor(offsetY / vSpacing);
    const noteFrame = offsetX / hSpacing * 4096;
    console.log('row, noteFrame', row, noteFrame);

    this.props.createNote({
      trackIndex: trackIndex,
      duration: 4096,
      startsAt: Math.floor(noteFrame / 4096) * 4096,
      midiNum: row + 21,
    })
  }

  render() {
    const {
      containerWidth,
      containerHeight,
      numNotes,
      instrument,
      trackIndex,
    } = this.props;

    const hSpacing = 32;
    const vSpacing = (containerHeight / numNotes[instrument]);

    return (
      <Stage
        width={containerWidth}
        height={containerHeight}
        onClick={event => this.handleClick(event, hSpacing, vSpacing, trackIndex)}
      >
        <BarBackdrops
          containerHeight={containerHeight}
          containerWidth={containerWidth}
          gridHSpacing={hSpacing}
          gridVSpacing={vSpacing}
        />

        <GridLines
          horizontal
          hStart={0}
          hEnd={containerHeight}
          hLength={containerWidth}
          hSpacing={hSpacing}
          hColor='#666'
          vertical
          vStart={0}
          vEnd={containerWidth}
          vLength={containerHeight}
          vSpacing={vSpacing}
          vColor='#555'
        />

        <Notes
          trackIndex={trackIndex}
          gridHSpacing={hSpacing}
          gridVSpacing={vSpacing}
        />
      </Stage>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    numNotes: state.global.constants.numNotes,
    instrument: state.tracks[ownProps.trackIndex].instrument,
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: options => dispatch({
    type: 'CREATE_NOTE',
    options,
  })
})

Sequencer = connect(mapStateToProps, mapDispatchToProps)(Sequencer);
export default Sequencer;
