import React, { Component } from 'react';

import axios from 'axios';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calmNum: 1,
            qxNum: 0,
            clearNum: 0,
            getVal: '',
            inlandHotData: [],
            inlandCityData: [],
            searKeyData: [],
            gaxiosData: 'inland',
            arr: []
        }
        // 初始化时更改指向
        this.focusInputVal = this.focusInputVal.bind(this);
        this.changInputVal = this.changInputVal.bind(this);
        this.blurInputVal = this.blurInputVal.bind(this);
        this.clearInputVal = this.clearInputVal.bind(this);
        this.callback = this.callback.bind(this);
        this.gotoHotel = this.gotoHotel.bind(this);
        this.quxInputVal = this.quxInputVal.bind(this);
    }
    // 封装的更改值
    setStaNum(calmNum, qxNum, clearNum) {
        this.setState({
            calmNum,
            qxNum,
            clearNum
        });
    }
    // 聚焦时显示 取消键
    focusInputVal() {
        if (this.state.getVal) {
            this.setStaNum(0, 1, 1);
        } else {
            this.setStaNum(0, 1, 0);
        }
    }
    // 内容改变时显示 清空键
    changInputVal() {
        let getVal = this.refs.inputval.value;
        if (getVal) {
            this.setState({
                qxNum: 1,
                clearNum: 1,
                getVal
            });
            axios.get('http://localhost:2001/searchdata/key').then(data => {
                let sumData = data.data.data;
                for (let i = 0; i < sumData.length; i++) {
                    let str = sumData[i].name.indexOf(getVal);
                    if (str >= 0) {
                        this.state.arr.push(sumData[i]);
                        this.setState({
                            calmNum: 0,
                            searKeyData: this.state.arr
                        });
                    } else {
                    }
                }
            });
        }

    }
    // 失焦时隐藏 取消键和清空键
    blurInputVal() {
        if (this.state.getVal) {
            this.setStaNum(0, 1, 0);
        } else {
            this.setStaNum(0, 1, 0);
        }
    }
    // 清空
    clearInputVal() {
        this.refs.inputval.value = '';
        this.setState({
            clearNum: 0,// 隐藏清空键
            searKeyData: [],
            getVal: this.refs.inputval.value
        });
    }
    // 取消
    quxInputVal() {
        this.clearInputVal();
        this.setStaNum(1, 0, 0);
        this.setState({
            searKeyData: [],
        });
    }
    // 切换时触发
    callback(key) {
        if (key === 1) {
            let discern = 'inland';
            this.axiosQuest(discern);
        } else if (key === 2) {
            let discern = 'foreign';
            this.axiosQuest(discern);
        }
    }
    // 封装请求
    axiosQuest(discern) {
        axios.get('http://localhost:2001/searchdata/find', {
            params: {
                discern,
            }
        }).then((res) => {
            let { hotDestinations, cities } = res.data.data;
            if (res.data.code === 1) {
                this.setState({
                    inlandHotData: hotDestinations,
                    inlandCityData: cities
                });
            } else {
                this.setState({
                    inlandHotData: [],
                    inlandCityData: []
                });
            }
        });
    }
    // 初始化数据
    componentDidMount() {
        let discern = this.state.gaxiosData;
        this.axiosQuest(discern);
    }
    // 点击时带参跳转
    gotoHotel(prams) {
        console.log(prams);
    }

    render() {
        // 显示隐藏
        let stySear = {
            block: {
                display: 'block'
            },
            none: {
                display: 'none'
            }
        };
        let { calmNum, qxNum, clearNum, inlandHotData, inlandCityData, searKeyData } = this.state;
        return (
            <div className="Search">
                <div className="searTop">
                    <form>
                        <div className="inputVal">
                            <input
                                type="text"
                                className="seaInput"
                                ref="inputval"
                                placeholder="请输入目的地/酒店"
                                onBlur={this.blurInputVal}
                                onFocus={this.focusInputVal}
                                onChange={this.changInputVal}
                            />
                            <div className="clearDiv" onClick={this.clearInputVal}>
                                <div
                                    className="clearVal"
                                    style={clearNum ? stySear.block : stySear.none}
                                >x</div>
                            </div>

                        </div>
                    </form>
                    <span
                        className="searSpan"
                        onClick={this.quxInputVal}
                        style={qxNum ? stySear.block : stySear.none}>
                        取消</span>
                </div>
                {/* 静态搜索显示 */}
                <div className="searBot" style={calmNum ? stySear.block : stySear.none}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="国内" key="1">
                            <div className="search-content">
                                {/* 热门推荐 */}
                                <div className="content-title">
                                    <div className="tab-text">热门推荐</div>
                                    <ul className="title-item">
                                        {
                                            inlandHotData.map(item => {
                                                return (
                                                    <li
                                                        key={item.id}
                                                        className="title-lis">
                                                        <img
                                                            src={item.img}
                                                            onClick={this.gotoHotel.bind(this, item.id)}
                                                            alt="" />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* 城市 */}
                                {
                                    inlandCityData.map(item => {
                                        return (
                                            <div className="content-item" key={item.name}>
                                                <div className="tab-city">{item.name}</div>
                                                <div className="item-city">
                                                    {
                                                        item.cityInfos.map(items => {
                                                            return (
                                                                <div
                                                                    className="city-lis"
                                                                    key={items.name}
                                                                    onClick={this.gotoHotel.bind(this, items.name)}
                                                                >{items.name}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </TabPane>
                        <TabPane tab="国外" key="2">
                            <div className="search-content">

                                <div className="content-title">
                                    <div className="tab-text">热门推荐</div>
                                    <ul className="title-item">
                                        {
                                            inlandHotData.map(item => {
                                                return (
                                                    <li key={item.id} className="title-lis">
                                                        <img
                                                            src={item.img}
                                                            onClick={this.gotoHotel.bind(this, item.name)}
                                                            alt=""
                                                        />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {
                                    inlandCityData.map(item => {
                                        return (
                                            <div className="content-item" key={item.name}>
                                                <div className="tab-city">{item.name}</div>
                                                <div className="item-city">
                                                    {
                                                        item.cityInfos.map(items => {
                                                            return (
                                                                <div
                                                                    className="city-lis"
                                                                    key={items.name}
                                                                    onClick={this.gotoHotel.bind(this, items.name)}
                                                                >{items.name}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
                {/* 动态搜索显示 */}
                <div className="seraCanv" style={calmNum ? stySear.none : stySear.block}>
                    {/* 无值显示 */}
                    <div className="sorry" style={(searKeyData.length >= 1) ? stySear.none : stySear.block}>
                        抱歉没有找到搜索信息
                    </div>
                    {/* 有值显示 */}
                    <ul className="success-msg" style={(searKeyData.length >= 1) ? stySear.block : stySear.none}>
                        {
                            searKeyData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="###">
                                            <span>{item.name}</span>
                                            <span>{item.cityName}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div >
        )
    }
}