import React, { Component } from 'react';
import { Affix } from 'antd'

class topfix extends Component {
    state = {
        top: -55,
        bottom: 10,
    }
    xitop = (affixed) => {
        let top = this.state.top

        if (affixed) {
            top = 0
            this.setState({
                top
            })
        } else {
            top = -55
            this.setState({
                top
            })
        }

    }
    render() {
        return (
            <Affix offsetTop={-10} onChange={affixed => {
                this.xitop(affixed)
            }} >
                <div className="topmenu" style={{ top: this.state.top }}>
                    <div className="logoicon">
                        <span></span>
                    </div>
                    <div className="search">
                        <div className="ScDate">01.06-01.07</div>
                        <div className="Scplace">丽江</div>
                    </div>
                    <div className="logomine">
                        <span />
                    </div>
                </div>
            </Affix>
        )
    }

}
export default topfix