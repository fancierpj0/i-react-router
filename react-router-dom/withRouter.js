import React from 'react';
import {Route} from '../react-router-dom';

//注意要用()=> 包一层，不然得到的是虚拟DOM（因为<Route></Route>放这里就相当于函数调用），而不是组件
//let el = <Xxx></Xxx> 这样得到的就是虚拟dom
export default (Component) => (
  ()=><Route component={Component}></Route>
)
