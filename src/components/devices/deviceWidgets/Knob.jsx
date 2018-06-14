// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles: Object = {
  container: {
    backgroundColor: '#353b48',
    height: 40,
    width: 40,
    padding: 2,
  },

  knob: {
    backgroundColor: '#7f8fa6',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    position: 'relative',
  },

  indicatorLine: {
    backgroundColor: 'black',
    width: 1,
    height: '50%',
    position: 'absolute',
    top: '50%',
    'transform-origin': 'top',
  }
}

type Props = {
  classes: Object,
};

type State = {
  knobAngle: number,
};

class Default extends React.Component<Props, State> {
  listenForMouseY: () => void;

  constructor(props): void {
    super(props)
    this.state = {
      knobAngle: 0,
    }

    this.listenForMouseY = this.listenForMouseY.bind(this);
  }

  setKnobAngle(e: Object): void {
    this.setState({ knobAngle: e.clientY })
  }

  listenForMouseY(): void {
    document.addEventListener('mousemove', this.setKnobAngle)
  }

  stopListeningForMouseY(): void {
    document.removeEventListener('mousemove', this.setKnobAngle);
  }

  render(): Object {
    const { classes } = this.props
    const { knobAngle } = this.state

    return (
      <div
        className={classes.container}
        onDrag={() => console.log("entered drag")}
      >
        <div className={classes.knob}>
          <div className={classes.indicatorLine} style={{ transform: `rotate(${knobAngle}deg)` }}/>
        </div>
      </div>
    );
  }
}

Default = injectSheet(styles)(Default);
export default Default;
