import React, { Component } from 'react';
import { Affix } from 'antd'

class Travel extends Component {
    render() {
        return (
            <div className="travel">
                <div className="Ttitle">
                    <p className="p1">旅行攻略</p>
                    <p className="p2">更多></p>
                </div>
                <div className="Tcon">
                    <div className="travelitem"><img src={require("../../images/tr1.jpg")} /></div>
                    <div className="travelitem"><img src={require("../../images/tr2.jpg")} /></div>
                    <div className="travelitem"><img src={require("../../images/tr3.jpg")} /></div>
                </div>

                <div className="star">
                    <a href="###" >
                        <img src={require("../../images/star.png")} />
                    </a>
                </div>
            </div>
        )
    }

}
export default Travel