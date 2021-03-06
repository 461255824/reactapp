import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import {
  Route,
  Link
} from 'react-router-dom';
import Hello from './comment/Hello'
import Demo from './comment/Demo'
import RxDemo from './comment/Rx'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
require('./App.css')
class App extends Component {
  render() {
    return (
      <Layout id='main'>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
            <Link to="/main/hello" >Hello</Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/main/demo" >Demo</Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/main/rx" >Rx</Link>
            </Menu.Item>
          </Menu>
          <Button type="primary" onClick={()=>this.props.history.push('/login')}>
              点击退出登录
            </Button>
        </Header>
        <Layout id='container'>
          <Sider width={200} style={{ background: '#fff' }} id='aside'>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route  path="/main/hello"   component={Hello} />
              <Route  path="/main/demo"   component={Demo} />
              <Route  path="/main/rx"   component={RxDemo} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
