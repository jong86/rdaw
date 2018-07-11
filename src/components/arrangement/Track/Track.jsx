// @flow
import React from 'react';
import injectSheet from 'react-jss';
// import { store } from '../../../redux/store';
// const state = store.getState();
// const { global } = state.gui

import TrackOptions from './TrackOptions.jsx';
import TrackContent from './TrackContent.jsx';


const styles: Object = {
  container: {
    backgroundColor: '#95a5a6',
    padding: '5em',
    width: '500px',
    position: 'relative',
  },
}

type Props = {
  classes: Object,
  children: Object,
  name: string,
};

type State = {};

class Track extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <TrackOptions />
        <TrackContent />
      </div>
    );
  }
}

Track = injectSheet(styles)(Track);
export default Track;
