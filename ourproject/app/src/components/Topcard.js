import React, { Component } from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../assets/css/topcard.css'



class Topcard extends Component {
    render() {
        return <>
            <div className="tpy">
                <Card
                    hoverable
                    style={{ width: '31%' }}
                    cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201912/9c03b552-6f3c-4afd-8cda-421638e7a902.jpg" />}
                >
                    151人浏览
                </Card>
                <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201912/9c03b552-6f3c-4afd-8cda-421638e7a902.jpg" />}
                    >
                        151人浏览
                    </Card>
                <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201912/9c03b552-6f3c-4afd-8cda-421638e7a902.jpg" />}
                    >
                        151人浏览
                </Card>
                <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201912/9c03b552-6f3c-4afd-8cda-421638e7a902.jpg" />}
                    >
                        151人浏览
                </Card>
                <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201912/9c03b552-6f3c-4afd-8cda-421638e7a902.jpg" />}
                    >
                        151人浏览
                </Card>
            </div>
            <p className="footer">-已经到底了-</p>
            
        </>
    }
}

export default Topcard;