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
  constructor(): void {
    super()
    this.state = {
      knobAngle: 0,
    }
  }

  componentDidMount(): void {
    document.addEventListener('mousemove', (e: Object): void => {
      console.log(e);
    })
  }

  render(): Object {
    const { classes } = this.props
    const { knobAngle } = this.state

    return (
      <div className={classes.container}>
        <div className={classes.knob}>
          <div className={classes.indicatorLine} style={{ transform: `rotate(${knobAngle}deg)` }}/>
        </div>
      </div>
    );
  }
}

Default = injectSheet(styles)(Default);
export default Default;
