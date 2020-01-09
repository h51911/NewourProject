import React, { Component } from 'react';
// import 'antd/dist/antd.css';
import { Drawer, Icon, DatePicker } from 'antd';
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const { RangePicker } = DatePicker;

//日期选择框
function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}
function disabledDate(current) {
    return current && current < moment().endOf('day');
}
// function disabledDateTime() {
//     return {
//         disabledHours: () => range(0, 24).splice(4, 20),
//         disabledMinutes: () => range(30, 60),
//         disabledSeconds: () => [55, 56],
//     };
// }
function disabledRangeTime(_, type) {
    if (type === 'start') {
        return {
            disabledHours: () => range(0, 60).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }
    return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
    };
}
//
class Topfix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            placement: 'bottom',
            start: '',
            end: '',
            text: 'Child1'
        }
    }
    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        // console.log('acc', this.props)
        return (
            <>
                <div className="topmenu" style={{ top: this.props.oft }}>
                    <div className="logoicon">
                        <span></span>
                    </div>
                    <div className="search">
                        <div className="ScDate" onClick={this.props.showDrawer}>
                            <Icon type="schedule" />
                            <span className="triangle"></span>
                        </div>
                        <div className="Scplace">丽江</div>
                    </div>
                    <div className="logomine">
                        <span />
                    </div>
                </div>
                <div className="drewer" >
                    <Drawer
                        zIndex={10000}
                        title="日期选择"
                        placement={this.state.placement}
                        closable={true}
                        maskClosable={true}
                        onClose={this.props.onClose}
                        visible={this.props.visible}
                        height={'100%'}
                    >
                        <RangePicker
                            locale={locale}
                            disabledDate={disabledDate}
                            disabledTime={disabledRangeTime}
                            onChange={date => {
                                let start = JSON.stringify(date[0]._d).slice(6, 11);
                                let end = JSON.stringify(date[1]._d).slice(6, 11);
                                this.props.seprops.call(this, start, end)
                            }}
                            showTime={{
                                hideDisabledOptions: true,
                                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')]
                            }}
                            format="MM-DD"
                        />
                    </Drawer>
                </div>
            </>
        )
    }

}
export default Topfix