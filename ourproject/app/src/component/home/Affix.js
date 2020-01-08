import React, { Component } from 'react';
import { Affix } from 'antd';
// import { FullSlip, SlipItem } from "react-fullslip";
import 'antd/dist/antd.css';
// let topmenu = document.querySelector('.topmenu')

class Topfix extends Component {

    state = {
        top: -105,
        bottom: 10,
        isScroll: true,
        currentPage: 0
    }


    render() {
        // console.log(this.props)
        return (
            <>

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
            </>
        )
    }

}
export default Topfix