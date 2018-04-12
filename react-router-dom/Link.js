import React from 'react';
import PropTypes from 'prop-types'

export default class xxx extends React.Component{
  static contextTypes = {
    history:PropTypes.object
  };
  render(){
    return (
      <a onClick={()=>this.context.history.push(this.props.to)}>
        {this.props.children}
      </a>
    )
  }
}