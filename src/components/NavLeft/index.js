import React from 'react'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import 'antd/dist/antd.css';
import MenuConfig from './../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu;


export default class NavLeft extends React.Component {
    componentWillMount() {
       const menuTreeNode = this.renderMenu(MenuConfig);

       //所有通过渲染的对象都要通过setstate跟存起来; 并且render（）会被调用
       this.setState({
           menuTreeNode
       })
    }
    //菜单渲染
    renderMenu=(data)=>{
        //遍历每一个json object
        return data.map((item)=>{
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
                
            }
        return <Menu.Item title = {item.title} key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""></img>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}