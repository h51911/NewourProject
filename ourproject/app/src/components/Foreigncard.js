import React, { Component } from 'react';

import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../assets/css/topcard.css'

class Foreigncard extends Component{
    render() {
        return <>
                <div className="tpy2">
                    <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201910/b1f5df3d-26e7-4cda-bbfd-4dde8fb96604.jpg" />}
                    >
                        151人浏览
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201910/b1f5df3d-26e7-4cda-bbfd-4dde8fb96604.jpg" />}
                    >
                        151人浏览
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201910/b1f5df3d-26e7-4cda-bbfd-4dde8fb96604.jpg" />}
                    >
                        151人浏览
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201910/b1f5df3d-26e7-4cda-bbfd-4dde8fb96604.jpg" />}
                    >
                        151人浏览
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201910/b1f5df3d-26e7-4cda-bbfd-4dde8fb96604.jpg" />}
                    >
                        151人浏览
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '31%' }}
                        cover={<img alt="example" src="https://static.lvyuetravel.com/lvyue/home/image/201910/b1f5df3d-26e7-4cda-bbfd-4dde8fb96604.jpg" />}
                    >
                        151人浏览
                    </Card>
            </div>
            <p className="footer">-已经到底了-</p>
            </>
    }
}

export default Foreigncard;