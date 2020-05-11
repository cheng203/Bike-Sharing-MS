import React from 'react'
import {Card, Carousel} from 'antd'
import 'antd/dist/antd.css';
import './ui.less'

export default class Tab extends React.Component {

    render() {
        return(
            <div className="display">
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay={true}>
                        <div><h3>Ant Motion Banner - React</h3></div>
                        <div><h3>Ant Motion Banner - Vue</h3></div>
                        <div><h3>Ant Motion Banner - Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片背景轮播" className="card-wrap slider-wrap">
                    <Carousel autoplay={true}>
                        <div>
                            <img src='/carousel-img/carousel-1.jpg'></img>
                        </div>
                        <div>
                            <img src='/carousel-img/carousel-2.jpg'></img>
                        </div>
                        <div>
                            <img src='/carousel-img/carousel-3.jpg'></img>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}