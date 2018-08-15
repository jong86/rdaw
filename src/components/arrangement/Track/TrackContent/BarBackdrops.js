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
    // const DarkenedBeatColumn = () => {
    //   <Rect
    //     key={index}
    //     height={containerHeight}
    //     width={gridHSpacing * grid.denominator}
    //     x={0 + xOffset}
    //     y={0}
    //     fill={color}
    //     opacity={0.2}
    //   />
    // }

    const BarBackdrop = ({ xOffset, index, color }) => (
      <Rect
        key={index}
        height={containerHeight}
        width={gridHSpacing * grid.denominator}
        x={0 + xOffset}
        y={0}
        fill={color}
        opacity={0.2}
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
      for (let i = containerWidth; i > 0; i -= barWidth) {
        let color = index % 2 === 0 ? '#777' : '#222';

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
        <RenderBarBackDrops />
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
