import React from "react"

import { Popover, Button } from 'antd';
import CommentList from "./CommentList"

class CommentsPopOver extends React.Component {
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

    render() {
        return (
                <Popover
                    content={<CommentList store={this.props.store} traveller={this.props.traveller}/>}
                    title="People's Comments"
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    placement="left"
                >
                    <Button type="primary">See Comment</Button>
                </Popover>
        );
    }
}

export default CommentsPopOver;
