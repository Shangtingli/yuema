import React from "react"
import {Button, Form, Input} from "antd"

class SignUp extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const email = e.target[2].value;
        const phoneNumber = "+1" + e.target[3].value;

        this.props.signUp({
            username:username,
            password:password,
            email: email,
            phone_number: phoneNumber
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} style={{margin:"50px auto auto", width:"600px"}}>
                <Form.Item label="Username">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Username' }],
                    })(
                        <Input/>
                    )}

                </Form.Item>
                <Form.Item label="Password">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Password' }],
                    })(
                        <Input.Password/>
                    )}
                </Form.Item>
                <Form.Item label="Email">
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Email' }],
                    })(
                        <Input/>
                    )}
                </Form.Item>
                <Form.Item label="PhoneNumber">
                    {getFieldDecorator('phone_number', {
                        rules: [{ required: true, message: 'Phone Number' }],
                    })(
                        <Input/>
                    )}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Sign Up
                </Button>
            </Form>
        )
    }
}

const WrappedSignUp = Form.create({ name: 'signup' })(SignUp);
export default WrappedSignUp;

