// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { ThemeProvider } from 'react-jss'
import theme from './theme';

import TitleBar from './TitleBar';
import DeviceBar from './DeviceBar';
import Arrangement from './Arrangement';
import Transport from './Transport';

const styles: Object = {
  '@global': {
    body: {
      fontFamily: 'Arial',
      backgroundColor: '#34495e',
    },

    div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      userSelect: 'none',
      cursor: 'default',
    },
  }
};

type Props = {
  classes: Object,
};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <TitleBar />
          <Transport />
          <Arrangement />
          {/* <DeviceBar /> */}
        </div>
      </ThemeProvider>
    );
  }
};

App = injectSheet(styles)(App);
export default App;
