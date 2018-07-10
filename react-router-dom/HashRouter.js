import React from 'react';
import {Provider} from './context';

export default class HashRouter extends React.Component {
  //每当地址栏里的锚点发生改变(or history的历史栈发生改变)
  //，都需要重新匹配
  state = {
    location: {
      // #/ #/user
      pathname: window.location.hash ? window.location.hash.slice(1) : '/'
    }
  };

  componentDidMount() {
    if (!window.location.hash) {
      window.location.hash = '#/'
    }

    window.addEventListener('hashchange', () => {

      if (!window.location.hash) return window.location.hash = '#/';

      // console.log('window.location.hash:', window.location.hash);
      this.setState({
        location: {
          ...this.state.location

          //地址栏里#以后的路径
          , pathname: window.location.hash ? window.location.hash.slice(1) : '/'
        }
      });
    });
  }

  render() {
    let self = this

      , value = {
      location: self.state.location

      , history: {
        push(to) {
          //支持prompt
          if(self.block){
            let ok = window.confirm(self.block(typeof to === 'object' ? to : {pathname: to}));
            if(ok){
              self.block = false;
            }else{
              return;
            }
          }

          if (typeof to === 'object') {
            let {pathname, state} = to;

            self.setState({
              ...self.state
              , location: {
                ...self.state.location
                , pathname
                , state
              }
            }, () => {
              // console.log('this.state in hashRouter', this.state);
              window.location.hash = pathname;
            });

            //to='/xx' 字符串形式
          } else {
            window.location.hash = to;
          }

        }
        , goBack() {
          window.history.back();
        }
        , block(message) {
          self.block = message;
        }
        , unblock() {
          self.block = null;
        }
      }

    };

    return <Provider value={value}>
      {this.props.children}
    </Provider>;
  }
}
