import React, { Component } from 'react'
import { Radio, Icon } from 'antd'
import { Link } from 'react-router-dom'
// import axios from 'axios';
// import Api from './api.js'
// import Mycontext from '../../store/context'
class bookhotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            data: []
        }
    }
    // async componentDidMount() {
    //     let data = await Api.get({
    //         china: 1,
    //         province: '',
    //         city: '',
    //         pn: '',
    //         ps: '',
    //         lang: 'zh-CN',
    //     });
    //     this.setState({
    //         data
    //     })
    // }

    render() {
        // console.log(this.state.data)
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
                    <Link to="/Search">
                        <div className="Scbtn">
                            开始搜索
                        </div>
                    </Link>
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