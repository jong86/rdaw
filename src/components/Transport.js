// @flow
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

const styles = theme => ({
  container: {
    backgroundColor: 'tomato',
    height: 16,
    width: 16,
    marginTop: 0,
  }
})

type Props = {
  classes: Object,
};

type State = {};

class Transport extends React.Component<Props, State> {
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

const mapDispatchToProps = (state, ownProps) => {
  return {
  }
}

Transport = injectSheet(styles, { withTheme: true })(Transport);
Transport = connect(mapStateToProps, mapDispatchToProps)(Transport);
export default Transport;
