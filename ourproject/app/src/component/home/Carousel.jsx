import React from 'react';
import { Carousel } from 'antd'

function Banner() {
    return (
        <Carousel dots={false} autoplay>
            <div>
                <h3><img src={require("../../assets/images/cr1.jpg")} alt="" /></h3>
            </div>
            <div>
                <h3><img src={require("../../assets/images/Cr2.jpg")} alt="" /></h3>
            </div>
            <div>
                <h3><img src={require("../../assets/images/Cr3.jpg")} alt="" /></h3>
            </div>
            <div>
                <h3><img src={require("../../assets/images/Cr4.jpg")} alt="" /></h3>
            </div>
            <div>
                <h3><img src={require("../../assets/images/Cr5.jpg")} alt="" /></h3>
            </div>
            <div>
                <h3><img src={require("../../assets/images/Cr6.jpg")} alt="" /></h3>
            </div>
        </Carousel>
    )
}
export default Banner