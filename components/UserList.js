import React from 'react';
import {Route,Link}from '../react-router-dom';

export default class xxx extends React.Component{
  constructor(){
    super();
    this.state = {users:[]};
  }
  componentDidMount(){
    let usersStr = localStorage.getItem('users');
    let users = usersStr?JSON.parse(usersStr):[];
    this.setState({users});
  }
  render(){
    return (
      <ul className="list-group">
        {
          this.state.users.map((user,index)=>(
            <li className='list-group-item' key={index}>
              <Link to={"/user/detail/"+user.id}>{user.username}</Link>
            </li>
          ))
        }
      </ul>
    )
  }
}