import React from 'react'
import {Card, Button, message} from 'antd'
import 'antd/dist/antd.css';
import './ui.less'

export default class Messages extends React.Component {

    getMessage = (data)=> {
        message[data]("恭喜您，React课程晋级成功");
    }

    render() {
        return (
            <div className="display">
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.getMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.getMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.getMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.getMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.getMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}