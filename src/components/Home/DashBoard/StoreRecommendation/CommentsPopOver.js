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
                    <Button type="primary" className={"button-inside-store-rec"}>
                        See Comment
                    </Button>
                </Popover>
        );
    }
}


const styles = {
    button:{width: "100px", fontSize:"11.5px"}
}
export default CommentsPopOver;
