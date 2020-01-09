import React, { Component } from 'react';
// import Swiper from 'swiper/js/swiper';
// import 'swiper/css/swiper.css'


class Bigcity extends Component {
    componentDidMount() {
        // new Swiper('.swiper-container', {
        //     loop: false,//无缝轮播
        //     centeredSlides: true,
        // })
    }
    render() {
        return (
            <div className="bigcity">
                <h1>大城小事</h1>
                <h3>选一座城市，让生活慢下来</h3>
                <div className="bcarousel">
                    {/* <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                            </div>
                        </div>
                    </div> */}
                    <ul>
                        <li>
                            <a  ><img src={require("../../assets/images/bc1.jpg")} alt="" /></a>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/bc2.jpg")} alt="" /></a>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/bc3.jpg")} alt="" /></a>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/bc4.jpg")} alt="" /></a>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/bc5.jpg")} alt="" /></a>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/bc6.jpg")} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default Bigcity