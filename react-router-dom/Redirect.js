import React from 'react';
import PropTypes from 'prop-types';

export default class xxx extends React.Component {
  static contextTypes = {
    history:PropTypes.object
  }

  componentWillMount() {
    this.context.history.push(this.props.to);
  }

  render() {
    return null;
  }
}