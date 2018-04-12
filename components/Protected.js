import React from 'react';
import {Route,Redirect} from '../react-router-dom'

//用来保护只有登录后才放访问的路由
export default function({component:Component,...rest}){
  // Route中 不是component 而是render的话 就是渲染render返回的jsx tag
  return <Route {...rest} render={props=>(
    localStorage.getItem('login')?<Component {...props}/>:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}/>
  )}/>;
}