// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';


type Props = {};

type State = {};

class DeviceBar extends React.Component<Props, State> {
  render() {
    return (
      <div>
        hello from devicebar
      </div>
    );
  }
}

DeviceBar = injectSheet(DeviceBar);
export default DeviceBar;
