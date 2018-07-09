import React,{ Component } from 'react';
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
      <div style={container}>
        <Button type="primary" onClick={this.login}>
            点击登录
        </Button>
      </div>
      
    );


  }

}
var container = {
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    height:"100%"
}

export default Hello;