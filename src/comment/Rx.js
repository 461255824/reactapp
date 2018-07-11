import React, { Component } from 'react';

// import Rx from 'rxjs';
// console.log("Rx",Rx)
// 输入 "hello world"
// var numbers = Rx.Observable.of(10, 20, 30);
// var letters = Rx.Observable.of('a', 'b', 'c');
// var interval = Rx.Observable.interval(1000);
// var result = numbers.concat(letters).concat(interval);
//result.subscribe(x => console.log(x));
class RxDemo extends Component {
    constructor(){
        super();
        this.state = {
            num:1
        }
        this.add()
    }
    add(){
        let _this = this
        setInterval(function(){
            _this.setState({
                num:_this.state.num+1
            })
        },1000)
    }
  render() {
    return (
      <div className="hell">
        测试rxjs{this.state.num}
        <input type='text' />
      </div>
      
    );
  }
}

export default RxDemo;