import React from 'react';
import {Route,Link} from '../react-router-dom';
import './MenuLink.css';;

export default ({to,children})=>{
  return <Route path={to} children={props=>(
    <li className={props.match?"active":""}>
      <Link to={to}>{children}</Link>
    </li>
  )}/>
}