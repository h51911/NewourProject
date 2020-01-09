import React, { Component } from 'react'
import { Radio, Icon } from 'antd'
// import Mycontext from '../../store/context'
class bookhotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    render() {
        // console.log('aaa', this.props)
        return (
            <div className="Scbook">
                <div className="panel">
                    <div className="visitedinfo">
                        <div className="placeinfo">
                            丽江
                            </div>
                        <div className="choose">
                            <Radio defaultChecked={true} buttonStyle> </Radio>
                        </div>
                    </div>
                    <div className="bd"></div>
                    <div className="booktime" onClick={this.props.send.bind(null, this.state.visible)}>
                        <div className="btL">
                            <p>入住日期</p>
                            <i>{this.props.start}</i>
                        </div>
                        <div className="btM">
                            共 1 晚
                            </div>
                        <div className="btL">
                            <p>离店日期</p>
                            <i>{this.props.end}</i>
                        </div>
                    </div>
                    <div className="Scbtn">
                        开始搜索
                        </div>
                    <p className="textban">
                        <i>
                            <Icon type="safety-certificate" />
                        </i>
                        官方渠道预订享低价保证
                        </p>
                </div>
            </div>
        )
    }
}
export default bookhotal