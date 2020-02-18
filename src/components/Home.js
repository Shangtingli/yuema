import * as React from "react"
import Amplify,{Auth,API, graphqlOperation} from 'aws-amplify';
import {connect } from 'react-redux';
import NavBar from "./NavBar"
import {changeTab, logout, nextStep, switchLoginEntry, switchRegisterEntry} from "../actions/index"
import DashBoard from "./DashBoard";
import store from '../store';
import Loading from "./Loading"
import CharacteristicForm from "./CharacteristicForm"
import TodayForm from "./TodayForm"
import {listTravellers} from "../graphql/queries"
class Home extends React.Component{
    /**
     * TODO: Is it that only using O(n) time to find specific traveller with specific email?
     * Or could we just modify the query
     * @param email
     * @returns {Promise<*>}
     */
    async getTraveller(email){
        const travellers = await API.graphql(graphqlOperation(listTravellers));
        var traveller = null;
        debugger;
        for(let t of travellers.data.listTravellers.items){
            if (t.email === email){
                traveller = t;
                break;
            }
        }
        return traveller;
    }
    async getToken(){
        const tokens = await Auth.currentSession();
        const username = tokens.idToken.payload.email;
        return username;
    }

    async listTravellers() {
        const travellers = await API.graphql(graphqlOperation(listTravellers));
        return travellers;
    }
    componentDidMount(){
        this.getToken().then((response) => {
            this.getTraveller(response).then((response)=>{
                if (response === null){
                    this.props.dispatch(switchRegisterEntry);
                    debugger;
                }
                else{
                    this.props.dispatch(switchLoginEntry);
                }
            });
        });
    }

    handleLogout = () => {
        this.props.dispatch(logout);
    }

    handleChangeTab = (tab) => {
        this.props.dispatch(changeTab(tab));
    }

    nextStep = (data) =>{
        this.props.dispatch(nextStep('login',data));
    }

    render(){
        const states = store.getState();
        debugger;
        if (states.flow === -1){
            return (<Loading/>)
        }
        else if (states.flow === 0){
            return (<CharacteristicForm nextStep={this.nextStep}/>);
        }
        else if (states.flow === 1){
            return (<TodayForm nextStep={this.nextStep}/>);
        }
        else if (states.flow === 2){
            return(
                <div className='home-container'>
                    <NavBar handleLogout={this.handleLogout} handleChangeTab={this.handleChangeTab}/>
                    <DashBoard />
                </div>

            );
        }
        else{
            return (<div> Something is Wrong!!</div>)
        }

    }
}

const mapStateToProps = (state) =>({flow: state.flow, isLoggedIn: state.isLoggedIn});
export default connect(mapStateToProps)(Home);
// export default connect()(Home);