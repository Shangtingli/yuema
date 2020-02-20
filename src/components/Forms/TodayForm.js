import { submitInfo} from "../../actions/index";
import { Form, Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

import Logo from '../../assets/logo.png';


class CharacteristicForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.props.nextStep(values);
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <div className='form-container'>
                    <h2>Please tell us your travel plan today: </h2>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="Flight time">
                            {getFieldDecorator('flightTime', {
                                rules: [{ required: true, message: 'Please input your flight time!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Flight Destination">
                            {getFieldDecorator('flightDest', {
                                rules: [{ required: true, message: 'Please input your flight destination!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedCharacteristicForm= Form.create({ name: 'coordinated' })(CharacteristicForm);
const mapStateToProps = (state) => ({
    flightDest: state.flightDest,
    flightTime: state.flightTime,
});
export default connect(mapStateToProps)(WrappedCharacteristicForm)