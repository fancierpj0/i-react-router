import React from 'react';
import PropTypes from 'prop-types';

export default class xxx extends React.Component{
  static childContextTypes = {
    location:PropTypes.object
    ,history:PropTypes.object
  }

  constructor(props){
    super(props);
    this.state = {
      location:{
        pathname:window.location.hash.slice(1)||'/'
        ,state:{}
      }
    }
  }

  getChildContext(){
    let that = this;
    return {
      location:this.state.location
      ,history:{
        push(path){
          if(typeof path == 'object'){
            // state 是用来保存状态的
            let {pathname,state} = path;
            that.setState({location:{...that.state.location,state}},()=>{
              window.location.hash = pathname;
            })
          }else{
            window.location.hash = path; //会自动添加'#'
          }
        }
      }
    }
  }

  componentDidMount(){
    window.location.hash = this.state.location.pathname;
    // setState对象合并只会比较合并一层，
    let render = ()=>{
      this.setState({location:{...this.state.location,pathname:window.location.hash.slice(1)||'/'}});
    }
    window.addEventListener('hashchange',render);
  }


  render(){
    return this.props.children;
  }
}


