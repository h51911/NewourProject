import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/hoelist.css';

export default class Hoelist extends Component {
    state = {
        hoeListData: []
    }
    componentDidMount() {
        axios
            .get('http://localhost:2001/hoelist/find')
            .then((res) => {
                if (res.data.code === 1) {
                    this.setState({
                        hoeListData: res.data.data
                    });
                }
            });
    }
    // 跳转到详情页
    gotoAbout(name) {
        console.log(name);
    }
    render() {
        let { hoeListData } = this.state;
        return (
            <div className="Hoelist">
                {/* <div className="hoelist-top"></div> */}
                <div className="topmenu">
                    <div className="logoicon">
                        <span></span>
                    </div>
                    <div className="search">
                        <div className="ScDate">
                            01.06 - 01.07
                            <span className="triangle"></span>
                        </div>
                        <div className="Scplace">丽江</div>
                    </div>
                    <div className="logomine">
                        <span />
                    </div>
                </div>
                {/* 列表页2 */}
                <div className="hoelist-content">
                    {/* 遍历的项 */}
                    {
                        hoeListData.map(item => {
                            return (
                                <div className="hoelist-item" key={item.id}>
                                    <div className="item-img">
                                        <img src={item.headUrls[0]} alt="" onClick={this.gotoAbout.bind(this, item.name)} />
                                    </div>
                                    <div className="item-price">
                                        <span>会员￥</span>
                                        <span className="price-infor">{item.startingPrice}</span>
                                        <span>起</span>
                                    </div>
                                    <div className="item-tejia info-wrap">
                                        <span>天天特价</span>
                                    </div>
                                    <div className="item-title">
                                        <div className="list-content">{item.name}</div>
                                        <div className="list-extra">
                                            <span className="comment">
                                                <span>{item.score}分</span>
                                                <span>{item.commentCount}条评价</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="item-adrss">
                                        <span className="addressSpan">{item.cityName}</span>
                                        <span className="sdd">{item.address}</span>
                                    </div>
                                    <div className="item-tabs">
                                        {
                                            item.labels.map(items => {
                                                return (
                                                    <span className="item-span" key={items.uid}>{items.name}</span>
                                                )
                                            })
                                        } </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}