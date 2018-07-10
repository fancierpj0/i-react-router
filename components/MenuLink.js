import React from 'react';
import {Route, Link} from '../react-router-dom';
import './MenuLink.css';

export default function ({to, exact=false, label}) {
  //渲染Route有三种方式
  //1. component
  //2. render
  //3. children(不管匹配匹配不上都会渲染)

  return <Route path={to} exact={exact} children={
    ({match}) => <li className={match ? 'active' : ''}><Link to={to}>{label}</Link></li>
  }/>;
};
