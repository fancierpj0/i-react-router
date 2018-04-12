import React from 'react';
// import {HashRouter as Router,Link} from 'react-router-dom';
import {HashRouter as Router,Link} from '../react-router-dom';
import MenuLink from './MenuLink.js';

export default class xxx extends React.Component{
  render(){
    return (
      <Router>
        <div className='container'>
          <ul className='Nav'>
            {/*<li><Link to='/home'>首页</Link></li>*/}
            {/*<li><Link to='/user'>用户</Link></li>*/}
            {/*<li><Link to='/profile'>详情</Link></li>*/}
            <MenuLink to='/home'>首页</MenuLink>
            <MenuLink to='/user'>用户</MenuLink>
            <MenuLink to='/profile'>详情</MenuLink>
          </ul>
          <div className='View'>
            {this.props.children}
          </div>
        </div>
      </Router>
    )
  }
}