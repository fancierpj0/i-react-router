import React from 'react';
import {Route,Link}from '../react-router-dom';

export default class xxx extends React.Component{
  handleSubmit=(event)=>{
    event.preventDefault();
    let username = this.username.value;
    let user = {id:Date.now(),username};
    let usersStr = localStorage.getItem('users');
    let users = usersStr?JSON.parse(usersStr):[];
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    this.props.history.push('/user/list');
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">用户名</label>
            <input ref={input=>this.username=input} type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}