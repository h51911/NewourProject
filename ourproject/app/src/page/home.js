import React, { Component } from 'react';
import './css/base.css'
import './css/home.css'
import Banner from '../component/home/Carousel'
import Topfix from '../component/home/Affix'
import Bookhotal from '../component/home/bookhotal'
import Travel from '../component/home/Travel'
import './js/rem'



class Home extends Component {
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
                        <Topfix />
                    </div>
                </header>

                <main>
                    {/* 搜索栏 */}
                    <Bookhotal />
                    <Travel />
                    <a href="###" className="star">
                        <img src={require("../images/star.png")} />
                    </a>
                </main>
            </div>
        )


    }
}

export default Home