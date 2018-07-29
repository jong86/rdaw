// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Line } from "react-konva";

type coordinates = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
}

const GridLine = ({ x1, y1, x2, y2 }: coordinates) => (
  <Line
    points={[x1, y1, x2, y2]}
    stroke="grey"
  />
);

export default GridLine;
