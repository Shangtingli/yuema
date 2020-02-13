import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/loginflow/form.css';
import {Link} from "react-router-dom";

import Logo from '../../assets/logo.png';
class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            const endpoint = `/api/validateUser`;
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((response) => {
                return response.json();
            }).then((response) =>{
                if (response.result){
                    this.props.nextStep(values);
                }
                else{
                    alert("Invalid Login");
                }
            });
            //
        });

    };

    render() {
        const { getFieldDecorator } = this.props.form;
            return (
                <div className='form-dashboard-container'>
                    <img src={Logo} className="logo-image"/>
                    <div className='form-container'>
                        <Form onSubmit={this.handleSubmit} className="initial-form" id="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <Link to="/register">register now!</Link>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            )
        }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;