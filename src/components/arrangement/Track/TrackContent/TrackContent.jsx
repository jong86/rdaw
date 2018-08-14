// @flow
import React from 'react';
import Measure from 'react-measure'
import injectSheet from 'react-jss';
import type { rectDimensions } from '../../../../defs/defs.js.flow';
import { TrackContext } from '../Track.jsx';
import Sequencer from './Sequencer.jsx';

const styles: Object = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
  }
}

type Props = {
  classes: Object,
  type: string,
  instrument: string,
  timeline: Array<Array<Object>>,
};

type State = {};

class TrackContent extends React.Component<Props, State> {
  node: Object = React.createRef();

  render() {
    const { classes } = this.props

    return (
      <TrackContext.Consumer>
        {track =>
          <Measure
            bounds
          >
            {({ measureRef, contentRect }) => {
              const { width, height } = contentRect.bounds;

              return (
                <div
                  className={classes.container}
                  ref={measureRef}
                >
                  {track.instrument === "DRUMS" &&
                    <Sequencer
                      containerWidth={width}
                      containerHeight={height}
                      timeline={track.timeline}
                      instrument={track.instrument}
                    />
                  }
                </div>
              )
            }}
          </Measure>
        }
      </TrackContext.Consumer>
    );
  }
}

TrackContent = injectSheet(styles)(TrackContent);
export default TrackContent;