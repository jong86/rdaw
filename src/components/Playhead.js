// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const styles: Object = {
  container: {
    backgroundColor: '#2d3436',
    position: 'fixed',
    top: 0,
    left: 0,
    height: props => props.TitleBar.height,
    width: '100%',
    '-webkit-app-region': 'drag',
    zIndex: 5,
  }
}

type Props = {
  classes: Object,
  tracks: Object,
  TitleBar: Object,
};

type State = {};

class Playhead extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    Playhead: state.global.Playhead,
  }
}

Playhead = injectSheet(styles)(Playhead);
Playhead = connect(mapStateToProps)(Playhead);
export default Playhead;
