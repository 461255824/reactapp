import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Hello from './comment/Hello';
import Demo from './comment/Demo'
import Login from './comment/Login';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware  } from 'redux';
import { Provider } from 'react-redux'
import Test from './Test'
import thunkMiddleware from 'redux-thunk'
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
  } from 'react-router-dom'
  function counter(state = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT---->'+(state + 1))
      return state + 1;
    case 'DECREMENT':
      console.log('INCREMENT---->'+(state - 1))
      return state - 1;
    default:
      return state;
    }
  }
  console.log('柯理化函数',thunkMiddleware)
  // 创建 Redux store 来存放应用的状态。
  // API 是 { subscribe, dispatch, getState }。
  let store = createStore(counter,applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
  ));
  
  // 可以手动订阅更新，也可以事件绑定到视图层。
  store.subscribe(() =>
    console.log(store.getState())
  );
  
  // 改变内部 state 惟一方法是 dispatch 一个 action。
  // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
  // store.dispatch({ type: 'INCREMENT' });
  // // 1
  // store.dispatch({ type: 'INCREMENT' });
  // // 2
  // store.dispatch({ type: 'DECREMENT' });
  // 1
 
  const BasicExample = () => (
    <Router >
    <div className="routeBox">
        <Route exact path="/" render={() => (<Redirect to="/main/demo"/>)}></Route >
        <Route   path="/main" component={App}/>
        <Route  path="/login" component={Login}/>
        </div>
    </Router>
  )
  console.log('store',store,Provider)
ReactDOM.render(
  <Provider store={store}>
    <BasicExample  />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
