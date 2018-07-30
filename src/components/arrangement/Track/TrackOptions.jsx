// @flow
import React from 'react';
import injectSheet from 'react-jss';

import Text from '../../generic/Text.jsx';

const styles: Object =  {
  container: {
    height: '100%',
    width: props => props.width,
    position: 'absolute',
    left: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
        <Text
          style={{
            margin: 16,
          }}
        >
          {name}
        </Text>
      </div>
    );
  }
}

TrackOptions = injectSheet(styles)(TrackOptions)
export default TrackOptions;
