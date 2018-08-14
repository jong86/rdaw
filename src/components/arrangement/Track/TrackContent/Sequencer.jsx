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
  render() {
    const {
      containerWidth,
      containerHeight,
      timeline,
      instrument,
      numNotes,
    } = this.props;

    const hSpacing = 32;
    const vSpacing = (containerHeight / numNotes[instrument]);

    return (
      <TrackContext.Consumer>
        {track =>
          <Stage
            width={containerWidth}
            height={containerHeight}
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
              timeline={timeline}
              gridHSpacing={hSpacing}
              gridVSpacing={vSpacing}
            />
          </Stage>
        }
      </TrackContext.Consumer>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    numNotes: state.global.constants.numNotes,
  }
}

Sequencer = connect(mapStateToProps)(Sequencer);
export default Sequencer;
