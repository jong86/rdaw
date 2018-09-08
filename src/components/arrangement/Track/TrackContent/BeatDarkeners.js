// @flow
import React from 'react';
import Konva from "konva";
import { Layer, Rect } from "react-konva";
import { connect } from 'react-redux';

type Props = {
  containerWidth: number,
  containerHeight: number,
  gridHSpacing: number,
  gridVSpacing: number,
  grid: Object,
};

type State = {};

class BeatDarkeners extends React.Component<Props, State> {
  render() {
    const {
      containerWidth,
      containerHeight,
      gridHSpacing,
      gridVSpacing,
      grid,
    } = this.props;

    // Render beat columns all along the sequencer, alternating opacity every time
    const DarkenedBeatColumn = ({ index, xOffset }) => {
      return (
        <Rect
          key={index}
          height={containerHeight || 0}
          width={gridHSpacing}
          x={xOffset}
          y={0}
          fill={'#666'}
          opacity={0.05}
        />
      )
    }

    const RenderDarkenedBeatColumns = () => {
      const darkenedBeatColumns = [];

      for (let i = 0; i < (containerWidth / gridHSpacing); i++) {
        if (i % 2 === 0) {
          darkenedBeatColumns.push(
            <DarkenedBeatColumn
              key={i}
              index={i}
              xOffset={i * gridHSpacing}
            />
          )
        }
      }
      return darkenedBeatColumns;
    }

    return (
      <Layer>
        <RenderDarkenedBeatColumns />
      </Layer>
    );
  }
}

const mapStateToProps = state => {
  return {
    grid: state.project.grid,
  }
}

BeatDarkeners = connect(mapStateToProps)(BeatDarkeners);
export default BeatDarkeners;
