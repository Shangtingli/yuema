import React from 'react';
import Comments from "./Comments"
import {Button, Popover} from "antd"
import AddCommentForm from "./AddCommentForm"

class AddCommentPopOver extends React.Component{

    state = {
        visible: false,
    };

    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render(){
        return (
            <Popover
                content={<AddCommentForm traveller={this.props.traveller} store={this.props.store}/>}
                title="Add your Comments"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
                placement="right"
            >
                <Button type="primary">Add Comment</Button>
            </Popover>
        )
    }
}

export default AddCommentPopOver;