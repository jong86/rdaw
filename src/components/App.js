// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import DeviceBar from './DeviceBar';

const styles = {
  '@global': {
    body: {
      fontFamily: 'Arial',
      backgroundColor: '#2c3e50',
    },
  }
};

type Props = {
  classes: Object,
};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <DeviceBar />
      </div>
    );
  }
};

App = injectSheet(styles)(App);
export default App;
