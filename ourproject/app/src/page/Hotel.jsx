import React, { Component } from 'react';
import '../assets/css/home.css';
import Banner from '../component/home/Carousel';
import Topfix from '../component/home/Affix.js';
import Bookhotal from '../component/home/bookhotal';
import Travel from '../component/home/Travel';
import Bigcity from '../component/home/bigcity';
import Hotaltop from '../component/home/hotaltop';
import Fun from '../component/home/fun';
import Adv from '../component/home/Adv';
import { Affix } from 'antd';

import '../assets/js/rem2';

class Hotel extends Component {
    constructor() {
        super();
        this.state = {
            top: -105,
            currentPage: 0,
            visible: false,
            placement: 'bottom',
            start: '',
            end: ''
        }
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    componentDidMount() {
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', this.mouseScroll.bind(this), false);
        }
        window.onmousewheel = document.onmousewheel = this.mouseScroll.bind(this);
    }
    //监听并设置吸顶菜单
    scroll(n) {
        if (this.state.currentPage >= 6) {
            let top = this.state.top = 0
            this.setState({
                top
            });
        } else if (this.state.currentPage < 6) {
            let top = this.state.top = -105
            this.setState({
                top
            });
        }
        this.setState({
            currentPage: this.state.currentPage + n
        });

    }

    //给document/window绑定的滚轮时间
    mouseScroll(e) {
        e = e || window.event;
        if (e.wheelDelta < 0 || e.detail > 0) {//小于0说明向下滚动
            if (this.state.currentPage >= 16) {
                this.scroll(0)
            } else {
                this.scroll(1)
            }
        } else if (e.wheelDelta > 0 || e.detail < 0) {
            if (this.state.currentPage <= 0) {
                this.scroll(0)
            } else {
                this.scroll(-1)
            }
        }
    };

    //吸顶
    xitop = (affixed) => {
        let top = this.state.top
        if (affixed) {
            top = 0
            this.setState({
                top
            })
        } else {
            top = -105
            this.setState({
                top
            })
        }
    }

    //接收日期
    seprops = (a, b) => {
        this.setState({
            start: a,
            end: b
        })
    }
    render() {
        return (
            <div id="home">
                <header>
                    {/* 轮播图 */}
                    <div className="cr">
                        <Banner />
                    </div>
                    {/* minelogo */}
                    <div className="mine">
                        <a href="###" ></a>
                    </div>
                    {/* 滚动吸顶菜单 */}
                    <div>
                        <Affix offsetTop={120} onChange={affixed => {
                            // console.log(affixed)
                            this.xitop(affixed)
                        }} >
                            <Topfix oft={this.state.top} seprops={this.seprops} onScroll={this.handleScroll} />
                        </Affix>
                    </div>
                </header>

                <main>
                    {/* 搜索栏 */}
                    <Bookhotal start={this.state.start} end={this.state.end} />
                    {/* 旅游攻略 */}
                    <Travel />
                    {/* 大城小事 */}
                    <Bigcity />
                    {/* 精选酒店 */}
                    <Hotaltop />
                    <Fun />
                    <div className="foot">客服电话 400-898-7118</div>
                    <Adv />
                </main>

            </div>
        )


    }
}

export default Hotel;