import * as React from "react"
import {Auth,API, graphqlOperation} from 'aws-amplify';
import {connect } from 'react-redux';
import NavBar from "./NavBar"
import {changeTab, logout, nextStep, switchLoginEntry, switchRegisterEntry} from "../../actions/index"
import DashBoard from "./DashBoard";
import store from '../../store';
import Loading from "./DashBoard/Loading"
import CharacteristicForm from "../Forms/CharacteristicForm"
import TodayForm from "../Forms/TravelPlan"
import {getTraveller} from "../../graphql/queries"
import HobbyForm2 from "../Forms/HobbyForm2"
class Home extends React.Component{
    /**
     * type Order @model @key(fields: ["customerEmail", "createdAt"]) {
    customerEmail: String!
    createdAt: String!
    orderId: ID!
}
     */
    componentDidMount(){
        Auth.currentSession().then((response) => {
            const email = response.idToken.payload.email;
            const phoneNumber = response.idToken.payload.phone_number;
            API.graphql(graphqlOperation(getTraveller,{email:email})).then((response)=>{
                const traveller = response.data.getTraveller;
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
            return (<CharacteristicForm nextStep={this.nextStep} email={states.email}/>);
        }
        else if (states.flow === 1){
            return (<HobbyForm2 nextStep = {this.nextStep}/>)
        }
        else if (states.flow === 2){
            return (<TodayForm nextStep={this.nextStep}/>);
        }
        else if (states.flow ===3){
            return(
                <div className='home-container'>
                    <NavBar handleLogout={this.handleLogout} handleChangeTab={this.handleChangeTab} />
                    <br/><br/>
                    <div className='working-area'>
                        {/*<div className={'ads-area-left'}> Ads Area </div>*/}
                        <DashBoard className={'main-dashboard'}/>
                        {/*<div className={'ads-area-right'}> Ads Area </div>*/}
                    </div>
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