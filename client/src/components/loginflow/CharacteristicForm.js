//TODO: Add the characteristics form

import { Form, Select, Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

import Logo from '../../assets/logo.png';
const { Option } = Select;

class CharacteristicForm extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <div className='form-container'>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="Sexual Orientation">
                            {getFieldDecorator('sexualOrien', {
                                rules: [{ required: true, message: 'Please select your sexual orientation!' }],
                            })(
                                <Select
                                    placeholder="Enter your sexual orientation"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="bisexual">bisexual</Option>
                                </Select>,
                            )}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default CharacteristicForm;