import React from 'react';
import {Consumer} from './context';

export default class Link extends React.Component {
  render() {
    let {type, children, to, ...attrs} = this.props;

    if(!type) type = 'a';

    return (
      <Consumer>
        {
          value => {
            let {history: {push}} = value;
            attrs.onClick = () => push(to);

            return React.createElement(type, attrs, children);
          }
        }
      </Consumer>
    );
  }
}
