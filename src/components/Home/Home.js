import * as React from "react"
import {Auth,API, graphqlOperation} from 'aws-amplify';
import {connect } from 'react-redux';
import NavBar from "./NavBar"
import {changeTab, logout, nextStep, switchLoginEntry, switchRegisterEntry} from "../../actions/index"
import DashBoard from "./DashBoard";
import store from '../../store';
import Loading from "./DashBoard/Loading"
import CharacteristicForm from "../Forms/CharacteristicForm"
import TodayForm from "../Forms/TodayForm"
import {listTravellers} from "../../graphql/queries"
import Greetings from "./DashBoard/Greetings"
import HobbyForm from "../Forms/HobbyForm"
class Home extends React.Component{
    /**
     * TODO: Is it that only using O(n) time to find specific traveller with specific email?
     * Or could we just modify the query
     * @param email
     * @returns {Promise<*>}
     */
    componentDidMount(){
        Auth.currentSession().then((response) => {
            const email = response.idToken.payload.email;
            const phoneNumber = response.idToken.payload.phone_number;
            API.graphql(graphqlOperation(listTravellers)).then((response)=>{
                var traveller = null;
                for(let t of response.data.listTravellers.items){
                    if (t.email === email){
                        traveller = t;
                        break;
                    }
                }
                if (traveller === null){
                    this.props.dispatch(switchRegisterEntry(email,phoneNumber));
                }
                else{
                    this.props.dispatch(switchLoginEntry(email,phoneNumber));
                }

            })
        })
    }

    handleLogout = () => {
        this.props.dispatch(logout);
    }

    handleChangeTab = (tab) => {
        this.props.dispatch(changeTab(tab));
    }

    nextStep = (data) =>{
        this.props.dispatch(nextStep(data));
    }

    render(){
        const states = store.getState();
        if (states.flow === -1){
            return (<Loading/>)
        }
        else if (states.flow === 0){
            return (<CharacteristicForm nextStep={this.nextStep}/>);
        }
        else if (states.flow === 1){
            return (<HobbyForm nextStep = {this.nextStep}/>)
        }
        else if (states.flow === 2){
            return (<TodayForm nextStep={this.nextStep}/>);
        }
        else if (states.flow ===3){
            return(
                <div className='home-container'>
                    <NavBar handleLogout={this.handleLogout} handleChangeTab={this.handleChangeTab}/>
                    <Greetings/>
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