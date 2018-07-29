// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Text from '../../generic/Text.jsx';

const styles: Object =  {
  container: {
    // backgroundColor: 'silver',
    height: '100%',
    width: props => props.width,
    position: 'absolute',
    left: 0,
  }
}

type Props = {
  classes: Object,
  name: string,
};

type State = {};

class TrackOptions extends React.Component<Props, State> {
  render() {
    const { classes, name } = this.props

    return (
      <div className={classes.container}>
        <Text>
          {name}
        </Text>
      </div>
    );
  }
}

TrackOptions = injectSheet(styles)(TrackOptions)
export default TrackOptions;
