// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Rect } from "react-konva";

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
};

type State = {};

class NoteRows extends React.Component<Props, State> {
  render() {
    const { classes, containerWidth, containerHeight } = this.props

    return (
      <Rect
        height={100}
        width={100}
        x={0}
        y={0}
        fill="red"
      />
    );
  }
}

NoteRows = injectSheet(styles)(NoteRows);
export default NoteRows;
