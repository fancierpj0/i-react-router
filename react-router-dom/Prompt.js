import React from 'react';
import {Consumer} from './context';

export default class Prompt extends React.Component {
  componentWillUnmount(){
    this.history.unblock();
  }

  render() {
    return (
      <Consumer>
        {
          val => {
            this.history = val.history;

            let {when, message} = this.props;
            if(when){
              val.history.block(message);
            }else{
              val.history.unblock();
            }
          }
        }
      </Consumer>
    );
  }
}
