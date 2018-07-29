// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Line } from "react-konva";

type props = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
}

const GridLine = ({ x1, y1, x2, y2, color }: props) => (
  <Line
    points={[x1, y1, x2, y2]}
    stroke={color}
  />
);

export default GridLine;
