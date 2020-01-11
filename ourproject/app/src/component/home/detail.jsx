import React, { Component } from 'react';
import '../../assets/css/detail.css'
import { Drawer, Radio } from 'antd'
const RadioGroup = Radio.Group;
class Detail extends Component {

    state = {
        visible: false,
        placement: 'right',
    };
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
    render() {
        return (
            <div className="detail">
                <header>
                    <div className="textbox">
                        <h2>四川乐山旅游攻略</h2>
                        <p>乐山古称嘉州，地处四川盆地西南部，古代盛产色香俱佳的海棠，又有“海棠香国”之称。在今日游客的心里，乐...</p>
                        <p>更新于 2019-12-06</p>
                        <span className="goapp"></span>
                        <span className="rec">攻略推荐酒店</span>
                        <span className="menu" onClick={this.showDrawer}></span>
                    </div>
                    <img
                        alt="example"
                        src="https://static.lvyuetravel.com/lvyue/home/image/201912/0b726feb-e6c9-462f-80fd-d62254cc9128.jpg"
                    />
                </header>
                <main>
                    <div className="m1">
                        <p>乐山古称嘉州，地处四川盆地西南部，古代盛产色香具佳的海染，又有海端香国”之称，在今日游存的心里，乐山的名，一是源自那馨举世无双的大佛，再是来自与之相邻的秀美的偏教名山峨耀山，乐山因此而有“东文佛都”的美誉。慈祥、大度、平和、深广的佛门糖义成了乐山之魂，乐山不止有乐山大佛，还有很多雅政的花筑客钱等你来体验哦！</p>
                    </div>
                    <div className="m2">
                        <h2>景点篇</h2>
                        <h3>乐山大佛</h3>
                        <u>“山是一尊佛，佛是一座山”这是诗人对乐山大佛的赞颂。她位于岷江、青衣江和大渡河交汇处凌云山栖霞峰的岩壁上，又名凌云大佛，被联合国教科文组织批准为“世界文化与自然遗产”。造型为弥勒佛坐像，是唐代摩崖造像艺术的精品。</u>
                        <img src="https://static.lvyuetravel.com/lvyue/ows/travel/guide/image/201912/22a6507e-12dd-42b9-a3d2-229b8d74da26.jpg" alt="" />
                    </div>
                </main>
                <div>
                    <RadioGroup
                        style={{ marginRight: 8 }}
                        defaultValue={this.state.placement}
                        onChange={this.onChange}
                    >
                    </RadioGroup>

                    <Drawer
                        title="攻略目录"
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <p>>&nbsp;&nbsp;&nbsp;引言</p>
                        <p>>&nbsp;&nbsp;&nbsp;景点篇</p>
                        <p>>&nbsp;&nbsp;&nbsp;乐山大佛</p>
                    </Drawer>
                </div>
            </div>
        )
    }

}
export default Detail