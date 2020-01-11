import React, { Component } from 'react';

// import { Switch ,Route} from 'react-router-dom';

import { Icon } from 'antd';

import '../assets/css/order.css'

class Order extends Component{
    render() {
        return <>
            <div style={{width: '100%', background: 'rgb(249, 249, 249)'}}>
                <div className="gotoHotel">
                    <p>
                        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABP0lEQVRYR+2WMU7EMBBFZzoKJDpa9gZI9BSUUNvONtBvwQ3o6DgBogeJ/GQPsHfYZks6uAIlkgdZIpKRNpEde+OVILXl9zLzPTZT4Y8L8+lfIFsFjDEXIvJARF9EdAtgHdLeLALGmCsRaYno4Ae6AXA6icAWuOO+A5jtXKAHbonoGsDLTgUG4AsATyFwt2ZUBnLBRwnkhEcLKKXOmXnlpd3t4XoeVXa/PcEt0FoficgbMx97GyTBoyqglLpj5vtf9syLuq4fQwO3bV1MBdxkO/M2eQUwT4FHVUBr/UlEhx3QWlu1bVv/KYGyLdiHEJY9hi5sRQdRl/aqqi6ttctc0zB4DvjHLafEKAEnk0titMCQhIjcNE3zHDKkkgQGJD4AnEwi0CMx3aO0+8uiz/KQUvetSc5ACjzqOk4F7W0FvgGjL78h5UamZAAAAABJRU5ErkJggg==" />
                        返回
                    </p>
                </div>
                <div className="header">
                    <div className="hotelName">花筑·阳朔西街忆景酒店</div>
                    <div className="roomName m10">
                        <span>房型预订</span>
                        <span>馨雅大床(双早)</span>
                    </div>
                    <div className="roomName">
                        <span>入离日期</span>
                        <span>01月11日-01月12日 共1晚</span>
                    </div>
                    <div></div>
                </div>
                <div className="stepper_wrap">
                    <p>房间数</p>
                    <div className="h5_steper">
                        <Icon type="minus" />
                        <input type="number" value="1"/>
                        <Icon type="plus" />
                    </div>
                </div>
                <div className="pepole_wrap">
                    <div className="title">
                        <p>*客房入住人姓名确保与证件一致</p>
                        <Icon type="more" rotate={90} style={{fontSize:'.666667rem'}}/>
                    </div>
                    <div className="content">
                        <div className="content-left">入住人</div>
                        <div className="content-right">
                            <p>客房1</p>
                            <span>
                                    <input type="text" placeholder="每个房间至少填写一个人" />
                                    <Icon type="schedule" />
                            </span>
                        </div>
                    </div>
                    <div className="am-list-body">
                        <p>联系电话+
                            <span>86</span>
                        </p>
                        <input type="tel" placeholder="用于联系及接受预订信息" />
                    </div>
                    <div className="am-list-body am-input-label">
                         <p>电子邮箱</p>
                        <input type="text" placeholder="用于发送酒店确认文件及入住凭证" />
                    </div>
                </div>
                <div className="coupon">
                    <span>优惠卷</span>
                    <span>暂无可用优惠卷</span>
                </div>
                <div className="invoice">
                    <a href="###">
                        <div className="invoice_info">
                            <span>发票</span>
                            <span>不需要发票</span>
                            <Icon type="right" style={{color:"#aaa"}} />
                        </div>
                    </a>
                    <div className="am-list-line">
                        <p>备注</p>
                        <input type="text" placeholder="选择或输入您其他的特殊要求" />
                    </div>
                    <div className="require">
                        <p>无烟房</p>
                        <p>高楼层</p>
                        <p>相邻房间</p>
                        <p>需清洁</p>
                        <p>有小孩</p>
                        <p>有孕妇</p>
                        <p>有老人</p>
                        <p>蜜月布置</p>
                    </div>
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
                    <div className="footer_tips" style={{border:0}}>
                        <p>退订政策</p>
                        <ul>
                            <li>预订后订单不可取消不可退款</li>
                        </ul>
                    </div>
                </div>
                <div className="submit_wrap">
                    <div className="line"></div>
                    <div className="submit_wrap_left">
                        <p>
                            <span>￥</span>
                            <span>134.00</span>
                        </p>
                        <p>已优惠￥124.00
                            <span>明细<Icon type="up" /></span>
                        </p>
                    </div>
                    <a href="###">
                        <span>01月11日</span>
                        <span>入住 去支付</span>
                    </a>
                </div>
                </div>
        </>
    }
}

export default Order;