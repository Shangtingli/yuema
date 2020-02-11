import { submitInfo} from "../../actions/index";
import { Form, Select, Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
const { Option } = Select;


class CharacteristicForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.props.dispatch(submitInfo(values));
        });
    };

    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
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
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedCharacteristicForm= Form.create({ name: 'coordinated' })(CharacteristicForm);
const mapStateToProps = (state) => ({
    flightDest: state.flightDest,
    flightTime: state.flightTime,
    sexualOrien: state.sexualOrien,
});
export default connect(mapStateToProps)(WrappedCharacteristicForm)