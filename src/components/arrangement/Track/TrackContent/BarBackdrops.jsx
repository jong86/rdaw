// @flow
import React from 'react';
import Konva from "konva";
import { Layer, Rect } from "react-konva";
import { arrayFrom } from '../../../../util/arrays';

type Props = {
  containerWidth: number,
  containerHeight: number,
};

type State = {};

class BarBackdrops extends React.Component<Props, State> {
  render() {
    const { containerWidth, containerHeight } = this.props;

    const BarBackdrop = () => (
      <Rect
        height={containerHeight}
        width={250}
        x={0}
        y={0}
        fill="#0f0"
        opacity={0.5}
      />
    )

    return (
      <Layer>
        <BarBackdrop />
      </Layer>
    );
  }
}

export default BarBackdrops;
