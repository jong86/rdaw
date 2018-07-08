// @flow
import React from 'react';
import injectSheet from 'react-jss';

const styleConstants: {
  borderRadius: number,
} = {
  borderRadius: 8,
}

const styles: Object = {
  container: {
    backgroundColor: '#95a5a6',
    borderRadius: styleConstants.borderRadius,
    padding: 4,
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
        This is a track
      </div>
    );
  }
}

Track = injectSheet(styles)(Track);
export default Track;
