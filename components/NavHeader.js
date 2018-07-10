import React from 'react';
import {withRouter} from '../react-router-dom';

class NavHeader extends React.Component {
  render() {
    return (
      <div>
        <a onClick={() => window.location.hash = "/"}>管理系统</a>
      </div>
    )
  }
}

//NavHeader本来是一个普通的组件，跟Route没有关系
export default withRouter(NavHeader);
