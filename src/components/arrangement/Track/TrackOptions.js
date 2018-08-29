// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Text from '../../generic/Text.js';
import { bindActionCreators } from '../../../../node_modules/redux';

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
  createNote: Function,
  trackIndex: number,
};

type State = {};

class TrackOptions extends React.Component<Props, State> {
  render() {
    const { classes, name, trackIndex } = this.props

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


const mapDispatchToProps = dispatch => ({
  createNote: options => dispatch({
    type: 'CREATE_NOTE',
    options,
  })
})

TrackOptions = connect(null, mapDispatchToProps)(TrackOptions);
TrackOptions = injectSheet(styles)(TrackOptions);
export default TrackOptions;
