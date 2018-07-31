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
      for (let i = containerWidth; i > 0; i -= barWidth) {
        let color = index % 2 === 0 ? '#020' : '#002';

        barBackdrops.push(
          <BarBackdrop
            xOffset={index * barWidth}
            index={index}
            key={index}
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
    grid: state.global.view.grid,
  }
}

BarBackdrops = connect(mapStateToProps)(BarBackdrops);
export default BarBackdrops;
