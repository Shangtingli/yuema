import React from "react"
import {Button, Form, Input} from "antd"

class ConfirmSignUp extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        const code = e.target[1].value;
        const username = e.target[0].value;
        this.props.confirmSignUp({username:username, confirmationCode:code});
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} style={styles.formContainer}>
                    <h2> Please Verify your identity </h2>
                    <h4> You should receive an email containing the confirmation code very soon </h4>
                    <Form.Item label="Username">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'User Name' }],
                        })(
                            <Input/>
                        )}

                    </Form.Item>

                    <Form.Item label="Code">
                        {getFieldDecorator('confirmationCode', {
                            rules: [{ required: true, message: 'Confirmation Code' }],
                        })(
                            <Input/>
                        )}

                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Confirm Sign Up
                    </Button>
                </Form>
        )
    }

}



export default Form.create({ name: 'confirmsignup'})(ConfirmSignUp);

const styles = {
    formContainer:{margin:"50px auto auto", width:"600px"}
}