import React from 'react'
import {Card, Input, Button, message, Checkbox,Form, Icon} from 'antd'
import 'antd/dist/antd.css';

const FormItem = Form.Item
class Login extends React.Component {
    handleSubmit =()=> {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values)=>{
            if(!err) {
                message.success(`${userInfo.username}, 您已经成功登陆，密码是${userInfo.password}`);
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <div style={{width: '100%'}}>
                <Card title="登录行内表单">
                    <Form layout="inline" style={{width: 300}}>
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登陆水平表单">
                    <Form  className="form-wrap" style={{width: 300}}> 
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules:[
                                        {
                                            required: true,
                                            message: "此处不能是空"
                                        },
                                        {
                                            min: 5, 
                                            max: 10,
                                            message: '长度不在范围内'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$','g'),
                                            message:'用户名必须为英文字母或者字母'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules:[
                                        {
                                            required: "true",
                                            message: "此处不能是空"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"/>} placeholder="密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('checkbox', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a hre="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(Login)