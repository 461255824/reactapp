import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Hello from './comment/Hello';
import Demo from './comment/Demo'
import Login from './comment/Login';
import registerServiceWorker from './registerServiceWorker';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
  } from 'react-router-dom'

  const BasicExample = () => (
    <Router >
    <div className="routeBox">
        
        <Route exact path="/" render={() => (<Redirect to="/main/demo"/>)}></Route >
        <Route   path="/main" component={App}/>
        <Route  path="/login" component={Login}/>
       
            
        </div>
    </Router>
  )
ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
