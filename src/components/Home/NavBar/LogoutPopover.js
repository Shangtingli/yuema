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
                <Button type="primary">Logout</Button>
            </Popover>
        );
    }
}

class LogoutOptions extends React.Component{
    authSignOut = () => {
        Auth.signOut({ global: true }).then(response => {
            console.log(response);
        });
    }

    handleClearCacheThenSignOut = () => {
        debugger;
        Cache.removeItem(this.props.email);
        this.authSignOut();
    }
    render(){
        return(
            <div>
                <Button onClick={this.handleClearCacheThenSignOut}>Yes</Button>
                <Button onClick={this.authSignOut}>No</Button>
            </div>
        )
    }
}