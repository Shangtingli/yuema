import * as React from "react"
import { Menu, Icon } from 'antd';
import {changeTab,logout} from '../../actions';
import '../../styles/home/home.css';
import store from "../../store";
import {connect} from "react-redux"
import Button from "antd/es/button/button"
class NavBar extends React.Component {

    handleClickTab = e => {
        this.props.dispatch(changeTab(e.key));
    };

    handleLogout = e => {
        e.preventDefault();
        this.props.handleLogout();
    }
    render() {
        const current = store.getState().currentTab;
        return (
            <div className='navbar-container'>
                <Menu onClick={this.handleClickTab} selectedKeys={[current]} mode="horizontal" className="navbar-options">
                    <Menu.Item key="about">
                        About
                    </Menu.Item>
                    <Menu.Item key="people">
                        Intersting People
                    </Menu.Item>
                    <Menu.Item key="store">
                        Intersting Store
                    </Menu.Item>
                    <Menu.Item key="account" id='my-account-tab'>
                        My Account
                    </Menu.Item>
                </Menu>

                <Button className="navbar-logout-button" onClick={this.handleLogout}> Logout </Button>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({currentTab: state.currentTab});
export default connect(mapStateToProps)(NavBar);