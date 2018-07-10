import React from 'react';
import api from './api';
import {Link} from '../react-router-dom';

export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentWillMount() {
    let users = api.getUsers();
    this.setState({users});
  }

  handleDelete = (id) => {
    let users = api.delUser(id);
    console.log('users:',users)
    this.setState({users});
  };

  render() {
    return (
      <ul className='list-group'>
        {this.state.users.map((item, index) => (
          <li key={index}>
            <Link to={{pathname:`/user/detail/${item.id}`,state:item}}>
              ID:{item.id}
              用户名:{item.username}
              <button
                onClick={(ev)=>{
                  ev.preventDefault();
                  ev.stopPropagation();
                  this.handleDelete(item.id);
                }}
              >删除</button>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
