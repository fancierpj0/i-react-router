import React from 'react';
import {Consumer} from './context';
import pathToRegexp from 'path-to-regexp';

export default class Switch extends React.Component {
  render() {
    return (
      <Consumer>
        {
          val => {
            let {location: {pathname}} = val
              , children = this.props.children;

            for (let i = 0; i < children.length; ++i) {
              let child = children[i]

                // '/' 主要是预防像Redirect这种没有路径的路径转换成正则时报错
                //exact为undefined的话在pathToRegexp的end配置项中作用并不等于false
                // ，它的效果等同于true
                , {path = '/', exact = false} = child.props
                , reg;

              reg = pathToRegexp(path, [], {end: exact});
              if(reg.test(pathname)){
                return child;
              }
            }

            //一个都没匹配上
            return null;
          }
        }
      </Consumer>
    );
  }
}
