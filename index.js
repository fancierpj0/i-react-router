import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch, Redirect} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Login from './components/Login';

import Protected from './components/Protected';
import MenuLink from './components/MenuLink';
import NavHeader from "./components/NavHeader";

//A <Router> may have only one child element
ReactDOM.render(
  <Router>
    <div>
      <NavHeader/>
      <ul>
        <MenuLink to='/' label='首页' exact={true}/>
        <MenuLink to='/user' label='用户管理' />
        <MenuLink to='/profile' label='个人设置'/>

        {/*<li>*/}
          {/*<Link to='/'>首页</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
          {/*<Link to='/user'>用户管理</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
          {/*<Link to='/profile'>个人设置</Link>*/}
        {/*</li>*/}
      </ul>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/user" component={User}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
        <Protected path="/profile" component={Profile}/>
        {/*<Redirect to='/'/>*/}
      </Switch>

    </div>
  </Router>
  , document.getElementById('root'));
