import React from 'react'
import {Card, Button, Radio, notification} from 'antd'
import 'antd/dist/antd.css';
import './ui.less'

export default class Modals extends React.Component {
    
    openNotification=(data, direction)=>{
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[data]({
            message: '发工资了',
            
            description: '上个月考勤22天，吃到22天，实发工资250， 请笑纳'
        });
    }

    render() {
        return(
            <div className="display">
                <Card title="通知提醒诓" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒诓" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error', 'bottomRight')}>Error</Button>
                </Card>
            </div>
        );
    }
}