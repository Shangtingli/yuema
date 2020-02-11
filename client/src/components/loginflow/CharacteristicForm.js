//TODO: Add the characteristics form

import { Form, Select, Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import store from '../../store';

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
        const a = store;
        debugger;
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