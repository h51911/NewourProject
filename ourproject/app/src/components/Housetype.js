import React, { Component } from 'react';

import { Icon } from 'antd';

import '../assets/css/housetype.css'

class Housetype extends Component {
    render() {
        return <div>
             <div className="tab-item layout">
                <div className="search-date">
                    <p>
                        <span>入住日期</span>
                        <span>01月08日</span>
                    </p>
                    <p>共 1 晚</p>
                    <p>
                        <span>离店日期</span>
                        <span>01月09日</span>
                    </p>
                </div>
                <div className="promotion-wrap">
                    <span>天天特价</span>
                    <p>部分房型有天天特价促销活动</p>
                </div>
                <div className="layout-info">
                    <div className="room-image">
                        <img src="https://static.lvyuetravel.com/lvyue/pms/image/201903/cb04975e-4195-4c2d-9d96-1b88d8e630f5.jpg" />
                    </div>
                    <div className="base-info-absolute">
                        <span>馨雅大床</span>
                        <span><Icon type="right" /></span>
                        <span>仅剩2间</span>
                    </div>
                    <div className="promotionTag">
                        <span>天天特价</span>
                    </div>
                    <div className="base-info-normal">
                        <span>单人床*1张</span>
                        <span>16㎡</span>
                        <span>可住2人</span>
                        <span>
                            <Icon type="up" />
                            <em>手机价格</em>
                        </span>
                    </div>
                    <div className="roomLabel">
                        <span>蜜月推荐</span>
                        <span>超强隔音</span>
                    </div>
                    <div className="roomLine"></div>
                    <div className="price-list">
                        <ul className="price-item">
                            <li className="price-item-left">
                                <span>天天特价</span>
                                <span>在线付</span>
                                <span>不可取消</span>
                                <span>双早</span>
                            </li>
                            <li className="price-item-right">
                                <span>预定</span>
                            </li>
                            <li className="price-item-center">
                                <p><span>134</span>￥</p>
                                <span>已减免￥124</span>
                            </li>
                        </ul>
                    </div>
                    <div className="price-list">
                        <ul className="price-item">
                            <li className="price-item-left">
                                <span>金卡会员95折</span>
                                <span>在线付</span>
                                <span>不可取消</span>
                                <span>双早</span>
                            </li>
                            <li className="price-item-right">
                                <span>预定</span>
                            </li>
                            <li className="price-item-center">
                                <p><span>245</span>￥</p>
                                <span>已减免￥13</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-footer">客服电话 400-898-7118</div>
            </div>
        </div>
    }
}

export default Housetype;