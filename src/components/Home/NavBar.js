import * as React from "react"
import {Menu} from 'antd';
import {changeTab} from '../../actions/index';
import '../../styles/styles.scss';
import store from "../../store";
import {connect} from "react-redux"
import LogoutPopover from "./NavBar/LogoutPopover"


class NavBar extends React.Component {

    handleClickTab = e => {
        this.props.dispatch(changeTab(e.key));
    };

    renderGreetingsAndLogout(user,firstName){
        if (firstName === '' || firstName === null){
            return null;
        }
        return (
            <div style={styles.logoutContainer}>
                <h3 style={styles.greetings}> {`Hello,${firstName}`}</h3>
                <LogoutPopover email={user}/>
            </div>
        )
    }
    render() {
        const states=  store.getState();

        const current = states.currentTab;

        return (
            <div className='navbar-container'>
                <Menu onClick={this.handleClickTab} selectedKeys={[current]} mode="horizontal" style={styles.menu}>
                    <Menu.Item key="store">
                        Intersting Store
                    </Menu.Item>
                    <Menu.Item key="people">
                        Intersting People
                    </Menu.Item>
                    <Menu.Item key="account">
                        My Account
                    </Menu.Item>
                    <Menu.Item key="about">
                        About Us
                    </Menu.Item>
                    <Menu.Item key="addStore" className='admin-role-element' style={{display : states.isAdmin ? "block":"none"}}>
                        Add Store
                    </Menu.Item>

                    {this.renderGreetingsAndLogout(states.email,states.firstName)}
                </Menu>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({currentTab: state.currentTab,firstName: state.firstName, lastName: state.lastName});
export default connect(mapStateToProps)(NavBar);

const styles = {
    menu: {
        float:'left',
        width:'100%',
        display:"flex",
        justifyContent: "space-between"
    },
    greetings:{
        float:'left',
        marginLeft: "50px"
    },
    logoutContainer:{
        float:'right',
        width: '400px',
        height: '45px' ,
        backgroundColor: "white"
    }
}