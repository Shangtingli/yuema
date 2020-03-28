import React from "react"
import {Input, Form, Button} from "antd"

class SignIn extends React.Component {

    state = {
        submitted: false
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        this.setState({submitted: true});
        this.props.signIn({username:email, password: password});
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
                    Sign In
                </Button>
            );
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
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

                {this.renderButton()}


            </Form>
        )
    }
}

export default Form.create({ name: 'signin' })(SignIn);