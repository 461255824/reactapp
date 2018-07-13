import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Login from './comment/Login';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware  } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from'./reducer/index.js'
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/index.js';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from 'react-router-dom'
  // 创建 Redux store 来存放应用的状态。
  // API 是 { subscribe, dispatch, getState }。
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(reducer,applyMiddleware(
    sagaMiddleware, // 允许我们 dispatch() 函数
  ));
  sagaMiddleware.run(sagas)
  // 可以手动订阅更新，也可以事件绑定到视图层。
  store.subscribe(() =>
    console.log('树',store.getState())
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
ReactDOM.render(
  <Provider store={store}>
    <BasicExample  />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
