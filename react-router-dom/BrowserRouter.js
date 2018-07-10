import React from 'react';
import {Provider} from './context';

export default class HashRouter extends React.Component {
  //每当地址栏里的锚点发生改变(or history的历史栈发生改变)
  //，都需要重新匹配
  state = {

  };

  componentDidMount() {

  }

  render() {
    let value = {
      location: window.location.pathname

      ,history:{
        push(to){
          window.history.pushState({},null,to);
        }
      }

    };

    return <Provider value={value}>
      {this.props.children}
    </Provider>;
  }
}
