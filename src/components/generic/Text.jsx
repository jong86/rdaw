// @flow
import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    color: 'brown',
  }
}

let Text = ({ children, classes }) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

Text =  injectSheet(styles)(Text);
export default Text;