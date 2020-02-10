import { Form, Input, Button} from 'antd';
import React from 'react';
import Logo from '../../assets/logo.png';

class CharacteristicsForm extends React.Component {
    render() {
        const formItemLayout = {labelCol: { span: 4 }, wrapperCol: { span: 14 }};
        const buttonItemLayout = {wrapperCol: { span: 14, offset: 4 }};
        return (
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <div className='form-container'>

                    <Form className='initial-form'>
                        <Form.Item label="Sexual Orientation" {...formItemLayout}>
                            <Input placeholder="Sexual Orientation" />
                        </Form.Item>
                        <Form.Item label="Flight Destination" {...formItemLayout}>
                            <Input placeholder="Flight Destination" />
                        </Form.Item>
                        <Form.Item label="Flight Time" {...formItemLayout}>
                            <Input placeholder="Flight Time" />
                        </Form.Item>
                        <Form.Item {...buttonItemLayout} id="submit-button">
                            <Button type="primary">Submit</Button>
                        </Form.Item>

                        <Form.Item {...buttonItemLayout}>
                            <Button onClick={this.props.prevStep} id='back-button'>Back</Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        );
    }
}

export default CharacteristicsForm;