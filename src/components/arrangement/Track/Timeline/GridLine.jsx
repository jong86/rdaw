// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Line } from "react-konva";


const styles: Object = {
  container: {
    backgroundColor: 'tomato',
    height: 16,
    width: 16,
  }
}

type Props = {
  classes: Object,
};

type State = {};

let GridLine = ({ x1, y1, x2, y2 }) => (
  <Line points={[0, 0, 50, 50]} stroke="black" />
);

GridLine = injectSheet(styles)(GridLine);
export default GridLine;
