import React, { Component } from 'react';

// import { withRouter } from 'react-router-dom';

import Topcard from '../components/Topcard';
import Foreigncard from '../components/Foreigncard';


import { Card } from 'antd';
import 'antd/dist/antd.css';

import '../assets/css/sitelist.css'


const tabListNoTitle = [
    {
        key: 'guonei',
        tab: '国内',
    },
    {
        key: 'guowai',
        tab: '国外',
    }
];

const contentListNoTitle = {
  guonei: <Topcard/>,
  guowai: <Foreigncard/>,
};
class Sitelist extends Component{

    constructor(props) {
        super(props);

        this.state = {
            key: 'guonei',
            noTitleKey: 'guonei',
        }
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({
            [type]: key
        });
    };

    render() {

        return  <div className="siteheader">
                <h2>当季推荐</h2>
                <div className="sitetuijian">
                    <ul>
                        <li>
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/home/image/201912/9c03b552-6f3c-4afd-8cda-421638e7a902.jpg"/>
                        </li>
                        <li>
                            <img alt="" src ="https://static.lvyuetravel.com/lvyue/home/image/201912/e6fdcbfd-9ecb-4314-b59a-c045b7308c59.jpg" />
                        </li>
                        <li>
                            <img alt="" src ="https://static.lvyuetravel.com/lvyue/home/image/201912/e6fdcbfd-9ecb-4314-b59a-c045b7308c59.jpg" />
                        </li>
                        <li>
                            <img alt="" src ="https://static.lvyuetravel.com/lvyue/home/image/201912/e6fdcbfd-9ecb-4314-b59a-c045b7308c59.jpg" />
                        </li>
                        <li>
                            <img alt="" src ="https://static.lvyuetravel.com/lvyue/home/image/201912/e6fdcbfd-9ecb-4314-b59a-c045b7308c59.jpg" />
                        </li>
                        <li>
                            <img alt="" src ="https://static.lvyuetravel.com/lvyue/home/image/201912/e6fdcbfd-9ecb-4314-b59a-c045b7308c59.jpg" />
                        </li>
                    </ul>
                </div>
                <h2>全部攻略</h2>
            <Card
                style={{ width: '100%' }}
                headStyle={{textAlign:"center"}}
                bordered={false}
                tabList={tabListNoTitle}
                activeTabKey={this.state.noTitleKey}
                //   tabBarExtraContent={<a href="#">More</a>}
                onTabChange={key => {
                    this.onTabChange(key, 'noTitleKey');
                }}
                >
                {contentListNoTitle[this.state.noTitleKey]}
            </Card>

            </div>
    }
}

// Sitelist = withRouter(Sitelist)

export default Sitelist;