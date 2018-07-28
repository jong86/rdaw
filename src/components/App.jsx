// @flow
import React from 'react';
import injectSheet from 'react-jss';

import TitleBar from './TitleBar.jsx';
import DeviceBar from './DeviceBar.jsx';
import Arrangement from './Arrangement.jsx';


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
      <div className={classes.container}>
        <TitleBar />
        <Arrangement />
        {/* <DeviceBar /> */}
      </div>
    );
  }
};

App = injectSheet(styles)(App);
export default App;
