// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import { FaPlay, FaStop } from 'react-icons/fa';
import Button from './generic/Button';

const styles = theme => ({
  container: {
    flexDirection: 'row',
    backgroundColor: 'silver',
    position: 'fixed',
    height: 16,
    width: '100%',
    top: props => props.global.TitleBar.height,
    zIndex: 3,
    height: props => props.global.Transport.height,
  },
})

type Props = {
  classes: Object,
};

type State = {};

export class Transport extends React.Component<Props, State> {
  handlePlay() {
    console.log("Playing...")
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

const mapDispatchToProps = (state, ownProps) => {
  return {
  }
}

export default (
  connect(mapStateToProps, mapDispatchToProps)(
  injectSheet(styles, { withTheme: true })(
  Transport))
);
