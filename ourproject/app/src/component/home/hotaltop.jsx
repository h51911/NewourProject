import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css';


class Hotaltop extends Component {
    state = {
        hotalist: [
            {
                imgurl: require("../../assets/images/aht1.jpg"),
                title: '花筑·阳朔西街忆景酒店',
                place: '阳朔',
                rode: '阳朔县阳朔镇叠翠路33号A栋101-105',
                tag: ['山水美景', '旅拍胜地', '逛吃天堂', '中式简约风', '客房赏美']
                , rate: '5.0',
                eva: '1604条评价'
            },
            {
                imgurl: require("../../assets/images/aht2.jpg"),
                title: '花筑·台儿庄古城兰邸客栈',
                place: '台儿庄古城',
                rode: '台湾街12号 ，近运河美食一条街-105',
                tag: ['台儿庄古城',
                    '最美水乡',
                    '旅拍胜地',
                    '逛吃天堂',
                    '古镇风情']
                , rate: '4.9',
                eva: '2474条评价'
            },
            {
                imgurl: require("../../assets/images/aht3.jpg"),
                title: '花筑·杭州漫居度假酒店',
                place: '西湖',
                rode: '虎跑路四眼井58号',
                tag: ['杭州西湖',
                    '网红酒店',
                    '清新茶园',]
                , rate: '4.8',
                eva: '1018条评价'
            },
            {
                imgurl: require("../../assets/images/aht4.jpg"),
                title: '花筑·昆明芙洛拉花园酒店',
                place: '昆明',
                rode: '斗南国际花卉交易中心花花世界园区九栋4楼',
                tag: ['亲子乐园',
                    '清新简约风',
                    '多肉花园',
                    '购花天堂',
                    '网红推剑']
                , rate: '5.0',
                eva: '954条评价'
            },
            {
                imgurl: require("../../assets/images/aht5.jpg"),
                title: '花筑·重庆解放碑美拉酒店',
                place: '重庆',
                rode: '八一路238号八一广场八楼',
                tag: ['重庆市中心',
                    '逛吃天堂',
                    '全球风情',
                    '房客房K歌',
                    '旅拍胜地']
                , rate: '4.9',
                eva: '1374条评价'
            },
            {
                imgurl: require("../../assets/images/aht6.jpg"),
                title: '花筑·重庆观音桥星悦荟民宿',
                place: '重庆',
                rode: '北滨一路258号龙湖星悦荟7区，近鎏嘉码头',
                tag: ['电影拍摄地',
                    '无敌江景',
                    '商务出行',
                    '旅拍胜地',
                    '逛吃天堂']
                , rate: '5.0',
                eva: '1334条评价'
            },
            {
                imgurl: require("../../assets/images/aht7.jpg"),
                title: 'Vyluk蔚徕酒店(珠海拱北口岸店)',
                place: '珠海',
                rode: '拱北昌盛路44号 新丰购物商场',
                tag: ['海岸风情',
                    '逛吃天堂',
                    '港珠澳大桥',
                    '澳门风情',
                    '时尚简约风']
                , rate: '4.7',
                eva: '1504条评价'
            },
            {
                imgurl: require("../../assets/images/aht8.jpg"),
                title: 'Vyluk蔚徕酒店(重庆观音桥步行街店)',
                place: '重庆',
                rode: '建新东路127号鸿程大厦',
                tag: ['观音桥商圈',
                    '商旅出行',
                    '年轻时尚风',
                    '旅拍胜地',
                    '轻奢客房']
                , rate: '5.0',
                eva: '1314条评价'
            },
            {
                imgurl: require("../../assets/images/aht9.jpg"),
                title: '花筑·杭州越上云舍精品民宿',
                place: '西湖',
                rode: '三台山路三台云舍69号',
                tag: ['江南院落',
                    '西湖美景',
                    '逛吃天堂',
                    '旅拍胜地',
                    '观景阳台']
                , rate: '5.0',
                eva: '1294条评价'
            },


        ]
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: false,//无缝轮播
            slidesPerView: 1.173,
            centeredSlides: true,

        })
    }

    render() {
        let { hotalist } = this.state;
        // console.log(hotalist)
        return (
            <div className="bigcity">
                <h1>精选酒店Top榜</h1>
                <h3>花开世界，陪你去世界每个角落</h3>
                <div className="hotaltop">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                hotalist.map(item => {
                                    return (
                                        <div key={item.imgurl} className="swiper-slide" >
                                            <div className="imgbox">
                                                <img src={item.imgurl} alt="" />
                                                <h2>{item.title}</h2>
                                                <span>{item.place}</span>
                                                <i>{item.rode}</i>
                                                <ul>
                                                    {item.tag.map(itemtag => {
                                                        return (
                                                            <li key={itemtag}>{itemtag}</li>
                                                        )
                                                    })}
                                                </ul>
                                                <p>{item.rate}&nbsp;&nbsp;&nbsp;</p>
                                                <i>|&nbsp;&nbsp;&nbsp;{item.eva}</i>
                                            </div>
                                        </div>
                                    )
                                })
                            }



                            {/* <div className="swiper-slide">
                                <div className="imgbox">
                                    <img src={require("../../assets/images/aht1.jpg")} />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="imgbox">
                                    <img src={require("../../assets/images/aht1.jpg")} />
                                </div>
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Hotaltop;