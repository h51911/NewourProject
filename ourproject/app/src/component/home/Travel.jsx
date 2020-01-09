import React, { Component } from 'react';
// import { Affix } from 'antd'
import { Link } from 'react-router-dom';
class Travel extends Component {
    render() {
        return (
            <div className="travel">
                <div className="Ttitle">
                    <p className="p1">旅行攻略</p>
                    <p className="p2">更多></p>
                </div>
                <div className="Tcon">
                    <Link to="/detail" >
                        <div className="travelitem"><img src={require("../../assets/images/tr1.jpg")} alt="" /></div>
                    </Link>
                    <Link to="/detail" >
                        <div className="travelitem"><img src={require("../../assets/images/tr2.jpg")} alt="" /></div>
                    </Link>
                    <Link to="/detail" >
                        <div className="travelitem"><img src={require("../../assets/images/tr3.jpg")} alt="" /></div>
                    </Link>
                </div>

                <div className="star">

                    <img src={require("../../assets/images/star.png")} alt="" />

                </div>
            </div>
        )
    }

}
export default Travel