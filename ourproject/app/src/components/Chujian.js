import React, { Component } from 'react';

import { Icon } from 'antd';

import '../assets/css/chujian.css';

class Chujian extends Component{

    constructor(props) {
        super(props);

        this.state = {
            fuwu: ['行李服务', '叫车服务', '租车服务', '自行车租凭', '管家服务', '礼宾服务', '24h前台', '非24h经理', '票务服务', '邮政服务', '叫醒服务', '送餐服务', '洗衣服务', '干洗', '鲜花店', '一次性结算', '快速入离', '传真/复印', '翻译服务', '会议厅', '床品更换', '欢迎礼品', '前台保险柜', '空调', '普通空调', '暖气', '电梯', '音响系统', '公共区监控', '收费公共wifi', '免费公共wifi', '全面禁烟', '无烟楼层', '公共花园', '急救包', '保安', '雨伞租凭', '洗衣房']

        }
    }

    render() {
        return <div>
                <div className="animated">
                    <img alt="" src="https://static.lvyuetravel.com/lvyue/pms/image/201910/26d72bda-1cc2-441c-8f88-af8ec8bfe220.jpg" />
                    <div className="line"></div>
                    <div className="hotel-info-item">
                        <div className="item-title">基本信息</div>
                        <div className="item-content">
                            <p style={{flex:'0 0 60%'}}><Icon type="clock-circle" /><span>入住：14: 00之后</span></p>
                            <p style={{flex:'0 0 40%'}}><Icon type="clock-circle" /><span>退房：12: 00之前</span></p>
                            <p style={{flex:'0 0 60%'}}><Icon type="schedule" /><span>开业 2019-02</span></p>
                            <p style={{flex:'0 0 40%'}}><Icon type="switcher" /><span>装修 2019-02</span></p>
                            <p style={{flex:'0 0 60%'}}><Icon type="phone" rotate={90} /><span>电话 86-19142970447</span></p>
                        </div>
                        <div className="item-footer">
                            <span>地址：阳朔县阳朔镇叠翠路33号A栋101-105</span>
                            <img alt="" src="data:image/png;base64,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" />
                        </div>
                    </div>    
                    <div className="hotel-info-item complex">
                        <p className="item-title">综合设施</p>
                        <p className="item-content">
                            <span><Icon type="check" style={{color:'#fabc2c',fontSize:'16px' ,fontWeight:'bold'}} />餐厅</span>
                            <span><Icon type="check" style={{color:'#fabc2c',fontSize:'16px' ,fontWeight:'bold'}} />徒步旅行</span>
                        </p>
                    </div>
                    < div className = "hotel-info-item service" >
                        <p className="item-title">综合设施</p>
                        <p className="item-content">
                            {
                                this.state.fuwu.map(item => {
                                    return <span key={item}>
                                        <Icon type="check"
                                            style={{ color: '#fabc2c', fontSize: '18px', fontWeight: 'bold' }}
                                        />
                                        {item}
                                    </span>
                                })
                            }
                        </p>
                    </div>
                    <div className="h5_policy">
                        <div className="footer_tips">
                            <p>入住政策</p>
                            <ul>
                                <li>酒店于入住当天14:00办理入住，如提前到达酒店，视酒店客房情况决定是否给予提前入住</li>
                                <li>官网预定入住保留时间为入住时间第二天中午12:00</li>
                                <li>金卡、白金、紫金、钻石、黑金会员本人入住最晚退房时间分别为下午13:00、14:00、14:00、15:00、15:00（视客房供应情况而定）</li>
                            </ul>
                        </div>
                        <div className="footer_tips footer_tips1">
                            <p>退订政策</p>
                            <ul>
                                <li>预订后订单不可取消不可退款</li>
                            </ul>
                        </div> 
                    </div>
                    <div className="page-footer">
                        客服电话 400-898-7118
                    </div>
                </div>
                <div className="book-footer">
                    <div className="shadow"></div>
                    <div className="footerContent">
                        <div className="footer-left">
                            <span>会员￥</span>
                            <span>147</span>
                            <span>起</span>
                            <span>在线付</span>
                        </div>
                        <div className="footer-right">
                            <a href="###">查看房型</a>
                        </div>
                    </div>
                </div>
                
            </div>
    }
}

export default Chujian;