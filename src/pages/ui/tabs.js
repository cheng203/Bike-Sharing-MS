import React from 'react'
import {Card, Button, Tabs, message} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import './ui.less'
const { TabPane } = Tabs;

export default class Tab extends React.Component {
    
    newTabIndex = 0;
    componentWillMount(){ 
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key:'1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key:'2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key:'3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }
    onChange =(activekey) => {
        console.log(activekey)
        this.setState({
            activeKey: activekey
        })
    }
    onEdit =(targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
    remove = (targetKey) => {
      let { activeKey } = this.state;
      let lastIndex;
      this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.state.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.setState({ panes, activeKey });
    };
    render() {
        return (
            <div className="display">
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <TabPane tab='Tab 1' key='1'>欢迎学习react课程</TabPane>
                        <TabPane tab='Tab 2' key='2'>欢迎学习react课程</TabPane>
                        <TabPane tab='Tab 3' key='3'>react厉害哟</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey='1' onChange={this.onChange}>
                        <TabPane tab={<span><PlusOutlined />Tab 1</span>} key='1'>欢迎学习react课程</TabPane>
                        <TabPane tab={<span><PlusOutlined />Tab 2</span>} key='2'>欢迎学习react课程</TabPane>
                        <TabPane tab={<span><PlusOutlined />Tab 3</span>} key='3'>react厉害哟</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab可修改的页签" className="card-wrap">
                    <Tabs onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        );
    }
}
