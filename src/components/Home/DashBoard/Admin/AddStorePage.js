import React from "react"
import Logo from "../../../../assets/logo.svg"
import { Form, Select, Input, Button } from 'antd';
import {connect} from "react-redux"
import {createStore} from "../../../../graphql/mutations"
import {API, graphqlOperation} from 'aws-amplify';
import TagsInput from "./TagsInput";

const { Option } = Select;
const { TextArea } = Input;
class AddStorePage extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            const store = {};
            store["storeName"] = values['storeName'];
            store['floor'] = parseInt(values['floor']);
            store['terminal'] = parseInt(values['terminal']);
            store['lat'] = values['lat'];
            store['lng'] = values['lng'];
            store['description'] = values['description'];
            store['tags'] = [];
            for (let i =1; i < 4; ++i){
                if (values['tag' + i] !== undefined){
                    store['tags'].push(values['tag' + i]);
                }
            }



            API.graphql(graphqlOperation(createStore,{input: store})).then((response) =>{
                alert("Add Store Success!");
            })
        });

    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>
                <div className='form-container'>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="StoreName">
                            {getFieldDecorator('storeName', {
                                rules: [{ required: true, message: 'Please enter store name!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>

                        <Form.Item label="Terminal">
                            {getFieldDecorator('terminal', {
                                rules: [{ required: true, message: 'Please select store terminal!' }],
                            })(
                                <Select
                                    placeholder="Select the store terminal"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="1">Terminal 1</Option>
                                    <Option value="2">Terminal 2</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="Floor">
                            {getFieldDecorator('floor', {
                                rules: [{ required: false, message: 'Please enter store floor!' }],
                            })(
                                <Select
                                    placeholder="Select the store floor"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="1">1st Floor</Option>
                                    <Option value="2">2nd Floor</Option>
                                    <Option value="3">3rd Floor</Option>
                                    <Option value="4">4th Floor</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="Lat">
                            {getFieldDecorator('lat', {
                                rules: [{ required: false, message: 'Please enter store exact lattitude!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>

                        <Form.Item label="Lng">
                            {getFieldDecorator('lng', {
                                rules: [{ required: false, message: 'Please enter store exact longitude!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>

                        <Form.Item label="Description">
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Please enter store exact longitude!' }],
                            })(
                                <TextArea rows={4}/>
                            )}
                        </Form.Item>

                        {/*<Form.Item label="Tags">*/}
                        {/*    {getFieldDecorator('tags', {*/}
                        {/*        rules: [{ required: true, message: 'Please enter tags for this store' }],*/}
                        {/*    })(*/}
                        {/*        <TagsInput/>*/}
                        {/*    )}*/}
                        {/*</Form.Item>*/}
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form.Item>


                    </Form>
                </div>
            </div>
        )
    }
}

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

const options = ['musics','books','travel','culinary','coding','romance','computerGame','movies','pets'];

const mapStateToProps = (state) => ({isAdmin: state.isAdmin, isStoreAdded: state.isStoreAdded});
const WrappedAddStorePage = Form.create({ name: 'addStorePage' })(AddStorePage);
export default connect(mapStateToProps)(WrappedAddStorePage);