// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import { FaPlay, FaStop } from 'react-icons/fa';
import Button from './generic/Button';

import player from '../music/Player';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    position: 'fixed',
    height: 16,
    width: '100%',
    top: props => props.global.TitleBar.height,
    zIndex: 4,
    height: props => props.global.Transport.height,
  },
})

type Props = {
  classes: Object,
  transportPlay: Function,
  transportStop: Function,
};

type State = {};

export class Transport extends React.Component<Props, State> {
  handlePlay = () => {
    console.log("You pressed play")
    player.startPlaying();
  }

  handleStop = () => {
    console.log("You pressed stop")
    player.stopPlaying();
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Button
          onClick={this.handlePlay}
          color='success'
        >
          <FaPlay />
        </Button>
        <Button
          onClick={this.handleStop}
          color='danger'
        >
          <FaStop />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    global: state.global,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    transportPlay: () => dispatch({
      type: 'SET_IS_PLAYING',
      isPlaying: true,
    }),
    transportStop: () => dispatch({
      type: 'SET_IS_PLAYING',
      isPlaying: false,
    }),
  }
}

export default (
  connect(mapStateToProps, mapDispatchToProps)(
  injectSheet(styles, { withTheme: true })(
  Transport))
);
