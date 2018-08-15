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
    height: '100%',
    width: 'fit-content',
    borderRadius: styleConstants.borderRadius,
    padding: 4,
    position: 'relative',
  },

  titleBar: {
    width: '100%',
    height: 12,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#718093',
    fontSize: 8,
    borderTopLeftRadius: styleConstants.borderRadius,
    borderTopRightRadius: styleConstants.borderRadius,
  }
}

type Props = {
  classes: Object,
  children: Object,
  name: string,
};

type State = {};

class Device extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.titleBar}>
          { this.props.name }
        </div>


        { this.props.children }
      </div>
    );
  }
}

Device = injectSheet(styles)(Device);
export default Device;
