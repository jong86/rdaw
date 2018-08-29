// @flow
import React from 'react';
import Konva from "konva";
import { connect } from 'react-redux';
import { Stage } from "react-konva";
import GridLines from './GridLines.js';
import Notes from './Notes.js';
import BarBackdrops from './BarBackdrops.js';

type Props = {
  containerWidth: number,
  containerHeight: number,
  instrument: string,
  numNotes: Object,
  createNote: Function,
  trackIndex: number,
};

type State = {};

export class Sequencer extends React.Component<Props, State> {
  handleClick(event: Object, hSpacing: number, vSpacing: number, trackIndex: number): void {
    const { offsetX, offsetY } = event.evt;
    const row = Math.floor(offsetY / vSpacing);
    const noteFrame = offsetX / hSpacing * 4096;
    console.log('row, noteFrame', row, noteFrame);

    this.props.createNote({
      trackIndex: trackIndex,
      duration: 1024,
      startsAt: Math.floor(noteFrame / 4096) * 4096,
      midiNum: row + 21,
    })
  }

  render(): Object {
    const {
      containerWidth,
      containerHeight,
      numNotes,
      instrument,
      trackIndex,
      view,
      grid,
      barWidth,
    } = this.props;

    const hSpacing = barWidth * (grid.numerator / grid.denominator) * view.zoom;
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
    view: state.project.view,
    grid: state.project.grid,
    barWidth: state.project.barWidth,
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: options => dispatch({
    type: 'CREATE_NOTE',
    options,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
