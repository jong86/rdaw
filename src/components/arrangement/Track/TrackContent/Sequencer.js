// @flow
import React from 'react';
import Konva from "konva";
import { connect } from 'react-redux';
import { Stage } from "react-konva";
import GridLines from './GridLines.js';
import Notes from './Notes.js';
import BeatDarkeners from './BeatDarkeners.js';
import { getLongestTrackInfo } from '../../../../util/music'

type Props = {
  containerWidth: number,
  containerHeight: number,
  instrument: string,
  numNotes: Object,
  createNote: Function,
  trackIndex: number,
  FRAMES_PER_BAR: number,
  grid: Object,
  view: Object,
  barWidth: number,
  tracks: Array<Object>,
};

type State = {};

export class Sequencer extends React.Component<Props, State> {
  handleClick(event: Object, hSpacing: number, vSpacing: number, trackIndex: number): void {
    const { FRAMES_PER_BAR, grid, trackHeight } = this.props;
    const { offsetX, offsetY } = event.evt;
    const row = (trackHeight / vSpacing) - Math.ceil(offsetY / vSpacing);
    const noteFrame = offsetX / hSpacing * FRAMES_PER_BAR;
    const noteLength = FRAMES_PER_BAR * (grid.numerator / grid.denominator)

    this.props.createNote({
      trackIndex: trackIndex,
      duration: noteLength,
      startsAt: Math.floor(noteFrame / FRAMES_PER_BAR) * noteLength,
      midiNum: row + 21,
    })
  }

  componentDidMount(): void {
    const amt = 400

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
    const { barWidth, tracks, FRAMES_PER_BAR } = this.props
    const { timelineFinish } = getLongestTrackInfo(tracks)
    const pixelWidth = timelineFinish / FRAMES_PER_BAR * barWidth
    return pixelWidth
  }

  render(): Object {
    const {
      trackHeight,
      numNotes,
      instrument,
      trackIndex,
      view,
      grid,
      barWidth,
    } = this.props;

    const hSpacing: number = barWidth * (grid.numerator / grid.denominator) * view.zoom;
    const vSpacing: number = trackHeight / numNotes[instrument];
    const containerWidth: number = this.getPixelWidthOfArrangement();

    return (
      <Stage
        width={containerWidth}
        height={trackHeight || 0}
        x={0}
        y={0}
        onClick={event => this.handleClick(event, hSpacing, vSpacing, trackIndex)}
      >
        <BeatDarkeners
          containerHeight={trackHeight}
          containerWidth={containerWidth}
          gridHSpacing={hSpacing}
          gridVSpacing={vSpacing}
        />

        <GridLines
          horizontal
          hStart={0}
          hEnd={trackHeight}
          hLength={containerWidth}
          hSpacing={hSpacing}
          hColor='#666'
          vertical
          vStart={0}
          vEnd={containerWidth}
          vLength={trackHeight}
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
    trackHeight: state.tracks[ownProps.trackIndex].gui.height,
    FRAMES_PER_BAR: state.global.constants.FRAMES_PER_BAR,
    tracks: state.tracks,
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: options => dispatch({
    type: 'CREATE_NOTE',
    options,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
