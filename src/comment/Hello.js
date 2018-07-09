import React, { Component } from 'react';

class Hello extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.msg = "你好世界"
  }
  render() {
    return (
      <div className="hell">
        向世界打招呼{this.msg}
        <div>{this.props.props}</div>
      </div>
      
    );
  }
}

export default Hello;