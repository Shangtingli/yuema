/**
 * Features List:
 * Sex Orientation
 * Phone Number
 * Flight Time
 * Flight Destination
 *
 */

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Button,
} from 'antd';
import React from 'react';
import Logo from "../../assets/logo.png";

/**
 * TODO: Could submit the form even when two passwords does not match
 */
const { Option } = Select;

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            fetch('/api/getUser',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: values.email})
            }).then((response)=> {
                return response.json();
            }).then((response) => {
                if (response.result === null){
                    const allvalues = {...values}
                    allvalues.phoneNumber = allvalues.prefix + allvalues.phoneNumber;
                    delete allvalues.prefix;
                    this.props.nextStep(allvalues);
                }
                else{
                    alert("User " + response.result.username + " Already Exists")
                }
            })

        });


    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        return (

            <div className="form-dashboard-container">
                <img src={Logo} className="logo-image"/>

                <div className="form-container">

                    <Form {...formItemLayout} onSubmit={this.handleSubmit} className='initial-form'>
                        <Form.Item label="FirstName">
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please enter your first name!' }],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="LastName">
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please enter your last name!' }],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                      Nickname&nbsp;
                                    <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                            }
                        >
                            {getFieldDecorator('nickName', {
                                rules: [{ required: true, message: 'Please input your nickName!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="Phone Number">
                            {getFieldDecorator('phoneNumber', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                        </Form.Item>


                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;