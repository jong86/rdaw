// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { store } from '../redux/store.js';
const state = store.getState();

// store.getState() gets current state
// store.subscribe() takes a callback to do every time state changes
// store.dispatch() changes state



const styles: Object = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    top: 0,
    left: 0,
    height: state.gui.TitleBar.height,
    width: '100%',
    '-webkit-app-region': 'drag',
    zIndex: 2,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class TitleBar extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

TitleBar = injectSheet(styles)(TitleBar);
export default TitleBar;
