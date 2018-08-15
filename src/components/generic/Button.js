// @flow
import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  container: {
    backgroundColor: props => theme.colors[props.color],
    padding: 2,
  }
})

let Button = ({ classes, children, onClick }) => {
  return (
    <div
      className={classes.container}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

Button =  injectSheet(styles, { withTheme: true })(Button);
export default Button;