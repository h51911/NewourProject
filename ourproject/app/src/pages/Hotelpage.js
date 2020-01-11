import React, { Component } from 'react';

import Chujian from '../components/Chujian'
import Housetype from '../components/Housetype'

import { Icon, Rate, Card,BackTop } from 'antd';
import 'antd/dist/antd.css';

import '../assets/css/hotelpage.css';


const tabListNoTitle = [
    {
        key: 'chujian',
        tab: '初见',
    },
    {
        key: 'fangxing',
        tab: '房型',
    },
];
const contentListNoTitle = {
  chujian: <Chujian/>,
  fangxing: <Housetype/>,
};


class Hotelpage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 'chujian',
            noTitleKey: 'chujian',
        }
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({
            [type]: key
        });
    };

    render() {
        return <>
            <div className="hotelpage">
                <ul>
                    <li>
                        <a href="###">
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201903/14f6b38b-325c-4e5e-a7a0-b467f42023e4.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201903/af0338e4-7d39-4296-acd3-d5af51d430b6.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201912/ca0474b7-73dd-4e20-b100-e8da5285d85a.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201912/6708c591-cd00-419a-a9dc-b554540e769e.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201903/4dc8b682-b82b-4542-9f51-d4ea77eb00a4.jpg" />
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201903/a9a8c1d9-6273-4f22-ba32-68f65e5f1c49.jpg" />
                        </a>
                    </li>
                </ul>
                <div className="hotel-name">
                    <h2>花筑·阳朔西街忆景酒店</h2>
                    <img alt="" src="data:image/png;base64,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" />
                </div>
                <div className="hotel-address">
                    {/* <Icon type="home" /> */}
                    <Icon type="environment" theme="filled" style={{color:'#fe7170',marginRight:'.1rem'}} />
                    <span>阳朔县阳朔镇叠翠路33号A栋101-105</span>
                </div>
                <div className="info-span">
                    <span>山水美景</span>
                    <span>旅拍胜地</span>
                    <span>逛吃天堂</span>
                    <span>中式简约风</span>
                    <span>客房赏美景</span>
                </div>
            </div>
            <div className="hotel-score" >
                <div className="score-stars">
                <Rate disabled defaultValue={5} style={{fontSize:'16px',color:'rgb(255, 183, 14)'}}/>
                    <span>5.0分</span>
                </div>
                <p>
                    <span>1609</span>
                    <span style={{marginRight:'.133333rem'}}>条评价</span>
                    <Icon type="right" style={{fontSize:'10px'}} />
                </p>
            </div>
            <div className="line"></div>
            <div className="interstsHotel">
                <img alt="" src="https://static.lvyuetravel.com/m/zh/images/hotelInerstsHotel.gif" />
            </div>
            <div className="line"></div>
            <Card
                style={{ width: '100%' }}
                headStyle={{textAlign:"center",color:'#555'}}
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
            <div>
                    <BackTop>
                        <div className="ant-back-top-inner">
                            <Icon type="arrow-up" style={{fontSize:'20px',textAlign:"center"}} />
                    </div>
                    </BackTop>
                </div>
        </>
    }
}
 
                                                                                                                                                                                                                     
export default Hotelpage;