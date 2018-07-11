// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { store } from '../redux/store.js';
const state = store.getState();

import Track from './arrangement/Track/Track.jsx';

const styles: Object = {
  container: {
    backgroundColor: '#222',
    position: 'fixed',
    top: state.gui.TitleBar.height,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 0,
  }
}

type Props = {
  classes: Object,
};

type State = {};

class Arrangement extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Track />
      </div>
    );
  }
}

Arrangement = injectSheet(styles)(Arrangement);
export default Arrangement;
