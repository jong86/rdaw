// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { ThemeProvider } from 'react-jss'
import theme from './theme';
import { connect } from 'react-redux';
import { Stage, Layer, Rect } from "react-konva";

import TitleBar from './TitleBar';
import DeviceBar from './DeviceBar';
import Arrangement from './Arrangement';
import Transport from './Transport';
import Playhead from './Playhead';

const styles: Object = {
  '@global': {
    body: {
      fontFamily: 'Arial',
      backgroundColor: '#34495e',
      padding: 0,
      margin: 0,
    },

    div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      userSelect: 'none',
      cursor: 'default',
    },
  },

  container: {
    width: '100%',
    marginTop: props => props.global.TitleBar.height + props.global.Transport.height,
  },
};

type Props = {
  classes: Object,
};

type State = {};

export class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

console.log('window', window);

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <TitleBar />
          <Transport />
          <Arrangement />
          <Stage
            style={{
              position: 'absolute',
              zIndex: 30,
              top: 0,
              left: 0,
            }}
            width={window.innerWidth}
            height={window.innerHeight}
          >
            <Layer>
              <Playhead />
            </Layer>
          </Stage>
        </div>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    global: state.global,
  }
}

export default (
  connect(mapStateToProps)(
  injectSheet(styles, { withTheme: true })(
  App))
);
