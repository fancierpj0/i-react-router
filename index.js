import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
// import {HashRouter as Router,Route} from 'react-router-dom';
// import UserAdd from "./components/UserAdd";
// import UserList from "./components/UserList";
// import UserDetail from "./components/UserDetail";
import {Route,Switch} from './react-router-dom';
import User from './components/User.js';
import Protected from './components/Protected.js';
import Login from './components/Login.js';

let Home = ()=><div>home</div>;
// let UserAdd = ()=><div>UserAdd</div>;
// let UserList = ()=><div>UserList</div>;

// let User = (props,context)=>{
//   console.log(props);
//   return <div>User</div>;
// };
// class User extends React.Component{
//   render(){
//     return (
//       <div>
//         {null}
//         <div>User</div>
//         <Route path='/user/add' component={UserAdd}/>
//         <Route path='/user/list' component={UserList}/>
//       </div>
//     )
//   }
// }

let Profile = ()=><div>detail</div>;

ReactDOM.render(<App>
  <Switch>
    <Route key='1' path='/home' component={Home}/>
    <Route key='2' path='/user'component={User}/>
    <Route key='3' path='/login'component={Login}/>
    <Protected key='4' path='/profile' component={Profile}/>
  </Switch>
</App>, document.getElementById('root'));

// ReactDOM.render(
//   <Router>
//     <Route path='/user' component={User}/>
//   </Router>
//   ,window.root
// )