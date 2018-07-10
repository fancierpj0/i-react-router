import React from 'react';
import {Consumer} from './context';
import pathToRegexp from 'path-to-regexp';

export default class Route extends React.Component {


  render() {

    return (
      <Consumer>
        {
          value => {
            let {location: {pathname}} = value

              //exact为undefined的话在pathToRegexp的end配置项中作用并不等于false
              // ，它的效果等同于true
              , {path = '/', component: Component, exact = false, render, children} = this.props
              , keys = []
              , props = {
                location: value.location
                , history: value.history
              }
              , regexp
              , result;


            regexp = pathToRegexp(path, keys, {end: exact});
            result = pathname.match(regexp);

            // console.log('pathname:', pathname, 'path:', path);
            if (result) { //result->[匹配上的字符串，第一个分组,...,匹配上的字符串的第一个字符在匹配项的索引位置，被匹配的字符串]
              let [, ...values] = result
                , params;

              keys = keys.map(key => key.name);
              params = keys.reduce((memo, name, index) => {
                return (memo[name] = values[index], memo);
              }, {});

              props.match = {url: pathname, path, params, exact};

              if (Component) {
                return <Component {...props}/>

              } else if (render) {
                return render(props);

              } else if (children) {
                return children(props)

              } else {
                return null
              }

            } else {
              if(children){
                return children(props)
              }else{
                return null;
              }
            }
          }
        }
      </Consumer>
    )
  }
}
