import * as React from "react"
import { Redirect } from "react-router"
import {connect } from 'react-redux';
import NavBar from "./NavBar"
import {changeTab, fillFeatures, logout} from "../../actions"
import DashBoard from "./DashBoard";
import store from '../../store';
import Loading from "./Loading"
class Home extends React.Component{

    handleLogout = () => {
        this.props.dispatch(logout);
    }

    handleChangeTab = (tab) => {
        this.props.dispatch(changeTab(tab));
    }


    render(){
        const states = store.getState();
        if (states.isLoggedIn){
                return(
                    <div className='home-container'>
                        <NavBar handleLogout={this.handleLogout} handleChangeTab={this.handleChangeTab}/>
                        <DashBoard/>
                    </div>

                );

        }
        else{
            return (<Redirect to="/" />);
        }

    }
}

const mapStateToProps = (state) =>({isLoggedIn: state.isLoggedIn});
export default connect(mapStateToProps)(Home);