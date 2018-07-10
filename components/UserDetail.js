import React from 'react';
import api from './api';

export default class UserDetail extends React.Component {
  state = {
    user: {}
  };

  componentDidMount(){
    let user = this.props.location.state.user;

    if(!user){
      let id = this.props.match.params.id;

      user = api.getUser(id);
    }

    this.setState({user});
  }

  render() {
    let {user} = this.state;

    return (
      <div>
        <p>ID:{user.id}</p>
        <p>用户名:{user.username}</p>
        <p>邮箱:{user.email}</p>
      </div>
    )
  }
}
