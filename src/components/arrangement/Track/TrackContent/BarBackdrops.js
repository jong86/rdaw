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

class BarBackdrops extends React.Component<Props, State> {
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

    const BarBackdrop = ({ xOffset, index, color }) => (
      <Rect
        key={index}
        height={containerHeight}
        width={gridHSpacing * grid.denominator}
        x={0 + xOffset}
        y={0}
        fill={color}
        opacity={0.1}
      />
    )

    const RenderBarBackDrops = () => {
      const barBackdrops = [];
      const barWidth = gridHSpacing * grid.denominator;

      let index = 0;

      /*
        => Need to modify this loop
        -step through loop by gridHSpacings
        -add to a variable every time, when this var. equals barWidth, place another BarBackDrop, then reset to zero
        -place a DarkenedBeatColumn every other beat to indicate 1/4 notes
      */
      for (let i = 0; i < containerWidth; i += barWidth) {
        let color = index % 2 === 0 ? '#333' : '#777';

        barBackdrops.push(
          <BarBackdrop
            key={index}
            xOffset={index * barWidth}
            index={index}
            color={color}
          />
        )
        index++;
      }

      return barBackdrops;
    }

    return (
      <Layer>
        {/* <RenderBarBackDrops /> */}
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

BarBackdrops = connect(mapStateToProps)(BarBackdrops);
export default BarBackdrops;
