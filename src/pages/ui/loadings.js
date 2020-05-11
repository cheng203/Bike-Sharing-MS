import React from 'react'
import {Card, Button, Spin, Alert} from 'antd'
import {LoadingOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import './ui.less'

export default class Loadings extends React.Component {

    render(){
        return (
            <div className="display">
                <Card title = "Spin的用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin size="default" style={{margin: '0 10px'}}/>
                    <Spin size="large" />
                    <Spin indicator={<LoadingOutlined />} style={{margin: '0 10px'}} />
                </Card>
                <Card title = "内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到react高级实战课程"
                        type= "info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到react高级实战课程"
                            type= "warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到react高级实战课程"
                            type= "warning"
                        />
                    </Spin>
                    <Spin indicator={<LoadingOutlined />} tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到react高级实战课程"
                            type= "warning"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}