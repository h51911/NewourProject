import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

//
export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <Menu>
                    <Menu.Item key="1">
                        <Link to="/hotel">
                            <Icon type="home" />
                            <span className="nav-name">酒店</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/travel">
                            <Icon type="calendar" />
                            <span className="nav-name">行程</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/steward">
                            <Icon type="paper-clip" />
                            <span className="nav-name">管家</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/treatment">
                            <Icon type="gift" />
                            <span className="nav-name">礼遇</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/member">
                            <Icon type="user" />
                            <span className="nav-name">会员</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}