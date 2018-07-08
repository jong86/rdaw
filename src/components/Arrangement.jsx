// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { store } from '../redux/store.js';
const state = store.getState();

const styles: Object = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    top: state.gui.TitleBar.height,
    left: 0,
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
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
        This is arrangement
      </div>
    );
  }
}

Arrangement = injectSheet(styles)(Arrangement);
export default Arrangement;
