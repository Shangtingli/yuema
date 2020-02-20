

import { Form, Select, Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

import Logo from '../../assets/logo.png';

const { Option } = Select;
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

class CharacteristicForm extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.props.nextStep(values);
        });

    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <div className='form-container'>
                    <h2>Please tell us more about you: </h2>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="FirstName">
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please enter your first name!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item label="LastName">
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please enter your last name!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item label="ageRange">
                            {getFieldDecorator('ageRange', {
                                rules: [{ required: true, message: 'Please select your age range!' }],
                            })(
                                <Select
                                    placeholder="Enter your age range"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="0-10">0-10</Option>
                                    <Option value="11-20">11-20</Option>
                                    <Option value="21-30">21-30</Option>
                                    <Option value="31-40">31-40</Option>
                                    <Option value="41-50">41-50</Option>
                                    <Option value="51 or older">51 or older</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="Sex">
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: 'Please select your sexual orientation!' }],
                            })(
                                <Select
                                    placeholder="Enter your gender"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="Country">
                            {getFieldDecorator('country', {
                                rules: [{ required: true, message: 'Please select your country!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form.Item>


                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedCharacteristicForm = Form.create({ name: 'characteristic' })(CharacteristicForm);

export default WrappedCharacteristicForm;

