import React, { Component } from 'react';


class Fun extends Component {
    render() {
        return (
            <div className="bigcity">
                <h1>花样撒野</h1>
                <h3>有限的精力，无限的玩法</h3>
                <div className="fun">
                    <ul className="funlist">
                        <li>
                            <a  ><img src={require("../../assets/images/fun1.jpg")} alt="" /></a>
                            <span>最爱大海深蓝色</span>
                            <p>潜到海底看美人鱼</p>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/fun2.jpg")} alt="" /></a>
                            <span>我不饿，我就是常常</span>
                            <p>论吃我真是太认真了</p>
                        </li>
                        <li>
                            <a  ><img src={require("../../assets/images/fun3.jpg")} alt="" /></a>
                            <span>带着萌娃看世界</span>
                            <p>年纪虽小眼界却大</p>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }

}
export default Fun