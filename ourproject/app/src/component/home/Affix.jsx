import React, { Component } from 'react';
// import 'antd/dist/antd.css';

class Topfix extends Component {
    render() {
        return (
            <div className="topmenu" style={{ top: this.props.oft }}>
                <div className="logoicon">
                    <span></span>
                </div>
                <div className="search">
                    <div className="ScDate">
                        01.06 - 01.07
                            <span className="triangle"></span>
                    </div>
                    <div className="Scplace">丽江</div>
                </div>
                <div className="logomine">
                    <span />
                </div>
            </div>
        )
    }

}
export default Topfix