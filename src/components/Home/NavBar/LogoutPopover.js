import * as React from "react"
import { Auth } from 'aws-amplify';
import { Popover, Button } from 'antd';
import {Cache} from 'aws-amplify';
export default class LogoutPopover extends React.Component {
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
                content={<LogoutOptions email={this.props.email}/>}
                title="Do you want to clear cache"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <Button type="primary" style={{marginTop: "7px"}}>Logout</Button>
            </Popover>
        );
    }
}

class LogoutOptions extends React.Component{
    authSignOut = () => {
        Auth.signOut().then(response => {
            console.log(response);
        });
    }

    handleClearCacheThenSignOut = () => {

        Cache.removeItem(this.props.email);
        this.authSignOut();
    }
    render(){
        return(
            <div style={{height:"40px"}}>
                <Button onClick={this.handleClearCacheThenSignOut} style={{float:"left"}}>Yes</Button>
                <Button onClick={this.authSignOut} type="primary" style={{float:"right"}}>No</Button>
            </div>
        )
    }
}