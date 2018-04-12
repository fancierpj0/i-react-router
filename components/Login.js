import React from 'react';

export default class xxx extends React.Component{
  handleClick=()=>{
    localStorage.setItem('login',true);
    this.props.history.push(this.props.location.state.from);
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick} className="btn btn-primary">登录</button>
      </div>
    )
  }
}