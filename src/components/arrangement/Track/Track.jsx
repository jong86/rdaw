// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import TrackOptions from './TrackOptions.jsx';
import TrackContent from './TrackContent/TrackContent.jsx';
export const TrackContext = React.createContext();


const styles: Object = {
  container: {
    backgroundColor: '#95a5a6',
    height: props => props.track.gui.height,
    width: props => `calc(100% - ${props.track.gui.optionsWidth}px)`,
    paddingLeft: props => props.track.gui.optionsWidth + 1,
    position: 'relative',
    margin: 8,
    borderRadius: props => props.global.theme.borderRadius,
  },
}

type Props = {
  classes: Object,
  children: Object,
  track: Object,
  global: Object,
};

type State = {};


class Track extends React.Component<Props, State> {
  render() {
    const { classes, track, global } = this.props;

    return (
      <TrackContext.Provider value={track}>
        <div className={classes.container}>
          <TrackOptions />
          <TrackContent
            type={track.type}
            instrument={track.instrument}
            timeline={track.timeline}
          />
        </div>
      </TrackContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    global: state.global,
  }
}


Track = injectSheet(styles)(Track);
Track = connect(mapStateToProps)(Track);
export default Track;
