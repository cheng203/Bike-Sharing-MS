import React from 'react'
import {Card, Input, Button, message, Checkbox,Form, Icon, Select, Radio, DatePicker, TimePicker, Upload, InputNumber, Switch, notification} from 'antd'
import 'antd/dist/antd.css';
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const {Option} = Select
const TextArea = Input.TextArea
class FormRegister extends React.Component {

    handleSubmit=()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values)=>{
            if(!err) {
                notification.success({
                    message: `${userInfo.username}, 感谢您的注册。您的密码是${userInfo.password}`
                })
                // message.success(`${userInfo.username}, 感谢您的注册。您的密码是${userInfo.password}`)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div style={{width: '100%'}}>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rule: [{
                                        required: true,
                                        message: "This is required"
                                    }]
                                })(
                                    <Input placeholder="请输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: ''
                                })(
                                    <Input type="password"  placeholder="请输入密码"></Input>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('Sex', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18'
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1'
                                })(
                                    <Select>
                                        <Option value="1">闲鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value= "3">北大才子</Option>
                                        <Option value= "4">百度FE</Option>
                                        <Option value= "5">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('hobby', {
                                    initialValue: '1'
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value= "3">打游戏</Option>
                                        <Option value= "4">睡觉</Option>
                                        <Option value= "5">学习</Option>
                                        <Option value= "6">骑行</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('married', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                   <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('brithday', {
                                    initialValue: moment('2018-08-08')
                                })(
                                   <DatePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address')(
                                   <TextArea 
                                        autoSize= {
                                            {
                                                minRows: 4
                                            }
                                        }
                                   />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                   <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                   <Upload
                                        listType="picture-card"
                                   >
                                   </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                   <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormRegister);