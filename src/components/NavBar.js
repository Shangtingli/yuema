import * as React from "react"
import { Menu, Icon } from 'antd';
import {changeTab,logout} from '../actions/index';
import '../styles/home/home.css';
import store from "../store";
import {connect} from "react-redux"

class NavBar extends React.Component {

    handleClickTab = e => {
        this.props.dispatch(changeTab(e.key));
    };

    render() {
        const current = store.getState().currentTab;
        return (
            <div className='navbar-container'>
                <Menu onClick={this.handleClickTab} selectedKeys={[current]} mode="horizontal" className="navbar-options">
                    <Menu.Item key="account">
                        My Account
                    </Menu.Item>
                    <Menu.Item key="people">
                        Intersting People
                    </Menu.Item>
                    <Menu.Item key="store">
                        Intersting Store
                    </Menu.Item>
                    <Menu.Item key="about">
                        About
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({currentTab: state.currentTab});
export default connect(mapStateToProps)(NavBar);