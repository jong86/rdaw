// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Layer, Rect } from "react-konva";

const styles: Object = {
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  }
}

type Props = {
  classes: Object,
  containerWidth: number,
  containerHeight: number,
  timeline: Array<Array<Object>>,
};

type State = {};

class Notes extends React.Component<Props, State> {
  render() {
    const { classes, containerWidth, containerHeight, timeline } = this.props

    return (
      <Layer>
        <Rect
          height={100}
          width={100}
          x={0}
          y={0}
          fill="red"
          opacity={0.5}
        />
      </Layer>
    );
  }
}

Notes = injectSheet(styles)(Notes);
export default Notes;
