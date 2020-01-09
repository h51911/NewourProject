import React, { Component } from 'react';

// import Swiper from 'swiper/js/swiper';
// import 'swiper/css/swiper.css'


class Adv extends Component {
    state = {
        dsp: 'block'
    }
    closeadv = () => {
        this.setState({
            dsp: 'none'
        })
    }
    render() {
        return (
            <div className="adv" style={{ display: this.state.dsp }}>
                <button className="zhe" onClick={this.closeadv}></button>
                <img src={require("../../assets/images/adv.png")} />
            </div>
        )
    }

}
export default Adv