import React, { Component } from 'react';
import {Button} from 'antd';
class Hello extends Component {
  constructor(props){
    super(props)
    this.login = this.login.bind(this)

  }
  login(){
      console.log('登录',this)
      this.props.history.push('/main/demo');
  }
  render() {
    return (
      <div className="hell">
        <Button type="primary" onClick={this.login}>
            点击登录
        </Button>
      </div>
      
    );
  }
}

export default Hello;