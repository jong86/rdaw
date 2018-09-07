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
  DIVISIONS_PER_BAR: number,
  grid: Object,
  view: Object,
  barWidth: number,
};

type State = {};

export class Sequencer extends React.Component<Props, State> {
  handleClick(event: Object, hSpacing: number, vSpacing: number, trackIndex: number): void {
    const { DIVISIONS_PER_BAR, grid, containerHeight } = this.props;
    const { offsetX, offsetY } = event.evt;
    const row = (containerHeight / vSpacing) - Math.ceil(offsetY / vSpacing);
    const noteFrame = offsetX / hSpacing * DIVISIONS_PER_BAR;
    const noteLength = DIVISIONS_PER_BAR * (grid.numerator / grid.denominator)

    this.props.createNote({
      trackIndex: trackIndex,
      duration: noteLength,
      startsAt: Math.floor(noteFrame / DIVISIONS_PER_BAR) * noteLength,
      midiNum: row + 21,
    })
  }

  componentDidMount(): void {
    const amt = 330

    for (let i = 0; i <= amt; i += 1) {
      this.props.createNote({
        trackIndex: 0,
        duration: 1024,
        startsAt: i * 1024,
        midiNum: 21,
      })
    }
    for (let i = 2; i < amt; i += 4) {
      this.props.createNote({
        trackIndex: 0,
        duration: 1024,
        startsAt: i * 1024,
        midiNum: 22,
      })
    }
    for (let i = 1; i < amt; i += 2) {
      this.props.createNote({
        trackIndex: 0,
        duration: 1024,
        startsAt: i * 1024,
        midiNum: 23,
      })
    }
  }

  getPixelWidthOfArrangement(): number {
    
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
        height={containerHeight || 0}
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
    DIVISIONS_PER_BAR: state.global.constants.DIVISIONS_PER_BAR,
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: options => dispatch({
    type: 'CREATE_NOTE',
    options,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
