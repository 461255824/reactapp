import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Button} from 'antd';
import { bindActionCreators } from 'redux'
class Hello extends Component {
  constructor(props){
    super(props)
    console.log('2',props)
    this.msg = "你好世界"
  }
  render() {
    return (
      <div className="hell">
        向世界打招呼{this.msg+this.props.number}
        <Button onClick={()=>this.props.add('INCREMENT')}>点击增加</Button>
      </div>
      
    );
  }
}

export default connect((state)=>{
  return {
    number:state
  }
},(dispatch)=>{
  return {
    add:bindActionCreators(function(type){//异步
      return function(dispatch){
        setTimeout(function(){
          dispatch({type})
        },1000)
      }
    },dispatch)
  }
})(Hello);