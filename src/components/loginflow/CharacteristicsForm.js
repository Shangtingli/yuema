import { Form, Input, Button, Radio } from 'antd';
import React from 'react';
import Logo from '../../assets/logo.png';

class CharacteristicsForm extends React.Component {
    render() {
        const formItemLayout = {labelCol: { span: 4 }, wrapperCol: { span: 14 }};
        const buttonItemLayout = {wrapperCol: { span: 14, offset: 4 }};
        return (
            <div>
                <img src={Logo} className="logo-image"/>
                <Form>
                    <Form.Item label="Field A" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Field B" {...formItemLayout}>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>

                <Button onClick={this.props.prevStep}>
                    Back
                </Button>
            </div>
        );
    }
}

export default CharacteristicsForm;