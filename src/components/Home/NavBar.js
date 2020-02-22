import * as React from "react"
import {Menu, Icon, Button} from 'antd';
import {changeTab,logout} from '../../actions/index';
import '../../styles/home/home.scss';
import store from "../../store";
import {connect} from "react-redux"
import { Auth } from 'aws-amplify';
class NavBar extends React.Component {

    handleClickTab = e => {
        this.props.dispatch(changeTab(e.key));
    };

    handleLogout = e => {
        /**
         * TODO: Auth.signOut() might not be enough for clearing session and cookies
         */
        Auth.signOut({ global: true }).then(response => {
            console.log(response);
        });
    }
    render() {
        const states=  store.getState();

        const current = states.currentTab;

        return (
            <div className='navbar-container'>
                <Menu onClick={this.handleClickTab} selectedKeys={[current]} mode="horizontal" style={{float:'left',width:'80%', display:"flex"}}>
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
                    <Menu.Item key="addStore" className='admin-role-element' style={{display : states.isAdmin ? "block":"none"}}>
                        Add Store
                    </Menu.Item>
                </Menu>
                <div style={{float:'right', width: '20%',marginTop:"10px"}}>
                    <h3 style={{float:'left',marginTop:"5px"}}> {`Hello,${states.firstName}`}</h3>
                    <Button className="navbar-logout-button" onClick={this.handleLogout} style={{float:'right'}}> Logout </Button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({currentTab: state.currentTab,firstName: state.firstName, lastName: state.lastName});
export default connect(mapStateToProps)(NavBar);