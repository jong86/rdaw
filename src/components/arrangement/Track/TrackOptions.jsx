// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Text from '../../generic/Text.jsx';
import { bindActionCreators } from '../../../../node_modules/redux';
import { TrackContext } from './Track.jsx';

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
        <div
          style={{
            border: '1px solid grey'
          }}
          onClick={() => {
            this.props.createNote({
              trackIndex: trackIndex,
              duration: 4096,
              startsAt: 0,
              midiNum: 24,
            })
          }}
        >
          test make note
        </div>
        <div
          style={{
            border: '1px solid green'
          }}
          onClick={() => {
            this.props.createNote({
              trackIndex: trackIndex,
              duration: 4096,
              startsAt: 4096,
              midiNum: 26,
            })
          }}
        >
          test make note 2
        </div>
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
