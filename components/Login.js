import React from 'react';

export default class Login extends React.Component{
  handleClick = () => {
    localStorage.setItem('logined', true);
    this.props.history.push(this.props.location.state.from);
  };

  render(){

    return (
      <div>
        >Login
        <button onClick={this.handleClick}>登录</button>
      </div>
    )
  }
}
