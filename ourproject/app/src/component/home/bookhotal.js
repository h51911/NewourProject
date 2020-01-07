import React, { Component } from 'react'
import { Radio, Icon } from 'antd'

class bookhotal extends Component {
    render() {
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
                    <div className="booktime">
                        <div className="btL">
                            <p>入住日期</p>
                            <i>01月06日</i>
                        </div>
                        <div className="btM">
                            共 1 晚
                        </div>
                        <div className="btL">
                            <p>离店日期</p>
                            <i>01月07日</i>
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