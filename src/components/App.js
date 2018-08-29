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

// import store from '../music/appState';


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

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <TitleBar />
          <Transport />
          <Arrangement />
          <Playhead />
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
