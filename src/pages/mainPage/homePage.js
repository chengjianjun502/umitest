import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, Link } from 'dva/router';
// import AnimatedSwitch from './common/animatedSwitch';
import './fitStyles.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const { Header, Content, Footer, Sider } = Layout;

export default class homePage extends Component {
    state={
        show: true,
        key: '1',
    }
    
    handleChange = ({key}) => {
        console.info('key:', key);
        if(key !== this.state.key){
            this.setState({
                key,
                show: !this.state.show,
            })
        }
    }
    render() {
        console.info(this.props,999);
        const { route: { routes = [] }, history } = this.props;
        // console.info('routes:', routes)
        return (
            <Layout>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" onClick={this.handleChange} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">
                        <Link to='/index/first'>firstPage</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">
                        <Link to='/index/second'>secondPage</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">
                      <Link to='/index/third/Tom'>thirdPage</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">
                        <Link to='/index/four'>fourthPage</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="5">
                    <Icon type="user" />
                    <span className="nav-text">
                        <Link to='/index/five'>fifpage</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="6">
                    <Icon type="user" />
                    <span className="nav-text">
                        <Link to='/index/six'>sixpage</Link>
                    </span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header className={'header'} style={{ padding: 0 }} />
                <Content className={'mContent'} style={{ margin: '24px 16px 0', height: 'calc( 100vh - 88px )' }}>
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.key}
                        timeout={500}
                        classNames={'fade'}
                        // unmountOnExit={true}
                        >
                        <Switch >
                            {
                                routes.map(item => {
                                    return (
                                        
                                            <Route 
                                                path={item.path}
                                                key={item.path}
                                                exact={item.exact}
                                                component={item.component}
                                            />
                                        
                                    )
                                })
                            }
                            
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
            </Layout>
        )
    }
}
