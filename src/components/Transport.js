// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import { FaPlay, FaStop, FaCircle } from 'react-icons/fa';
import Button from './generic/Button';

import playHandler from '../music/PlayHandler';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    position: 'fixed',
    height: 16,
    width: '100%',
    top: props => props.global.TitleBar.height,
    zIndex: 5,
    height: props => props.global.Transport.height,
  },
})

type Props = {
  classes: Object,
  project: Object,
};

type State = {};

export class Transport extends React.Component<Props, State> {
  handlePlay = () => {
    playHandler.startPlaying();
  }

  handleStop = () => {
    playHandler.stopPlaying();
  }

  handleRecord = () => {
    console.log("you pressed record")
  }

  render() {
    const { classes, project } = this.props

    return (
      <div className={classes.container}>
        <Button
          onClick={this.handlePlay}
          color={project.isPlaying ? 'neutral' : 'neutral-dark'}
        >
          <FaPlay />
        </Button>
        <Button
          onClick={this.handleStop}
          color={!project.isPlaying ? 'neutral' : 'neutral-dark'}
        >
          <FaStop />
        </Button>
        <Button
          onClick={this.handleRecord}
          color={project.isRecordingArmed ? 'danger' : 'neutral-dark'}
        >
          <FaCircle />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    global: state.global,
    project: state.project,
  }
}

export default (
  connect(mapStateToProps)(
  injectSheet(styles, { withTheme: true })(
  Transport))
);
