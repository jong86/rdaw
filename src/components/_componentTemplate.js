// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const styles: Object = {
  container: {
    backgroundColor: 'tomato',
    height: 16,
    width: 16,
  }
}

type Props = {
  classes: Object,
};

type State = {};

export class Default extends React.Component<Props, State> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        Template
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default (
  connect(mapStateToProps, mapDispatchToProps)(
  injectSheet(styles, { withTheme: true })(
  Default))
);
