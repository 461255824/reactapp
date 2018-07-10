
import React from 'react';
import { connect } from 'react-redux'
class Test extends React.Component{
    constructor(props){
      super(props)
      console.log('参数',props)
      props.dispatch({ type: 'INCREMENT' })
    }
    render(){
      return (
        <div>
        这是一个组件
        </div>
      )
    }
  }
  const mapStateToProps = state => ({
    state
  })
  
  const mapDispatchToProps = dispatch => dispatch
  export default connect(
      mapStateToProps,
  )(Test)