import React from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

export default class xxx extends React.Component {
  constructor(props) {
    super(props);
    let {path} = props; //user/detail/:id
    this.keys = [];
    this.regexp = pathToRegexp(path, this.keys, {end: false});
    this.keys = this.keys.map(key => key.name);
  }

  static contextTypes = {
    location: PropTypes.object
    , history: PropTypes.object
  }

  render() {
    let {location} = this.context;
    let result = location.pathname.match(this.regexp);
    let {path, component: Component, render, children} = this.props;
    let props = {
      location
      , history: this.context.history
    };

    if (result) {
      let [url, ...values] = result;

      props.match = {
        url //实际的路径
        , path //route上的path
        , params: this.keys.reduce((memo, key, idx) => {
          memo[key] = values[idx];
          return memo;
        }, {})
      };
      if (render) {
        return render(props);
      } else if (Component) {
        return <Component {...props}/>
      } else if (children) {
        return children(props);
      }
      return null;

    } else {
      if (children) {
        return children(props);
      } else {
        return null;
      }
    }
    // console.log(this.context);

    // if(path === pathname||pathname.startsWith(path)){
    //   return <Component location={this.context.location} history={this.context.history}/>;
    // }else{
    //   return null;
    // }
  }
}