import React from "react"
import {Button, Form, Input} from "antd"

class SignUp extends React.Component{

    state = {
        submitted: false,
    }

    renderButton = () => {
        if (this.state.submitted){
            return (
                <Button type="primary" loading>
                    Loading
                </Button>
            )
        }
        else{
            return (
                <Button type="primary" htmlType="submit">
                    Sign Up
                </Button>
            );
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const email = e.target[2].value;
        const phoneNumber = "+1" + e.target[3].value;

        this.setState({submitted: true});
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
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} style={styles.formContainer}>
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

                {this.renderButton()}
            </Form>
        )
    }
}

const WrappedSignUp = Form.create({ name: 'signup' })(SignUp);
export default WrappedSignUp;

const styles = {
    formContainer:{
        margin:"50px auto auto",
        width:"600px"
    }
}

