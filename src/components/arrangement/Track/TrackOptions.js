// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Text from '../../generic/Text.js';
import { bindActionCreators } from '../../../../node_modules/redux';

const styles: Object =  {
  container: {
    backgroundColor: '#aaa',
    height: '100%',
    width: props => props.optionsWidth,
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
    const { classes, track } = this.props

    return (
      <div className={classes.container}>
        <Text
          style={{
            margin: 16,
            width: '100%',
          }}
        >
          {track.name}
        </Text>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    track: state.tracks[ownProps.trackIndex],
    optionsWidth: state.global.gui.optionsWidth,
  }
}


const mapDispatchToProps = dispatch => ({
  createNote: options => dispatch({
    type: 'CREATE_NOTE',
    options,
  })
})

TrackOptions = injectSheet(styles)(TrackOptions);
TrackOptions = connect(mapStateToProps, mapDispatchToProps)(TrackOptions);
export default TrackOptions;
