import React from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

export default class xxx extends React.Component{
  static contextTypes = {
    location:PropTypes.object
  }
  render(){
    console.log('Router render'); //只会打印一次
    let {pathname} = this.context.location;
    let children = this.props.children;
    for(let i=0;i<children.length;++i){
      let child = children[i]; //一个route
      let {path} = child.props;
      if(pathToRegexp(path,[],{end:false}).test(pathname)){
        return child;
      }
    }
    return null;
  }
}