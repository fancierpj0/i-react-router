import React from 'react';
import api from './api';
import {Prompt} from '../react-router-dom';

export default class UserAdd extends React.Component {
  state = {
    isBlocking: false
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({isBlocking: false}, () => {
      let username = this.username.value;
      let email = this.email.value;
      let user = {username, email};

      api.createUser(user);

      //push也可以push一个对象，location对象
      this.props.history.push('/user/list');
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isBlocking}
          message={
            loc=>`请问你是否确定要切换到${loc.pathname}?`
          }
        />

        <label htmlFor="username">用户名</label>
        <input id="username" type="text"
               ref={x => this.username = x}
               onChange={() => this.setState({isBlocking: true})}
        />

        <label htmlFor="email">邮箱</label>
        <input id="email" type="email"
               ref={x => this.email = x}
               onChange={() => this.setState({isBlocking: true})}
        />

        <input type="submit"/>
      </form>
    );
  }
}
