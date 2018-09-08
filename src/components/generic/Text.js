// @flow
import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    color: 'black',
  }
}

let Text = ({ children, classes, style }) => {
  return (
    <div className={classes.container} style={style}>
      {children}
    </div>
  )
}

Text = injectSheet(styles)(Text);
export default Text;