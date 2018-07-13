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
    const {dispatch} = this.props;
    return (
      <div className="hell">
        向世界打招呼{this.msg}+stroe--->{this.props.store.number}
        <Button onClick={()=>this.props.addFn('Add')}>点击增加</Button>
      </div>
      
    );
  }
}

export default connect((store)=>{
  return {
    store
  }
},(dispatch)=>{
  return {
    addFn:function(type){
      dispatch({type:'Add'})
    }
  }
})(Hello);