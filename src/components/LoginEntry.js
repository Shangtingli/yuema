import React from 'react';
import TodayForm from "./TodayForm";
import {connect} from 'react-redux';
import store from '../store';
import { nextStep} from '../actions/index';
import {Redirect} from "react-router"
import Amplify, { API, graphqlOperation } from "aws-amplify";
import {listTravellers} from "../graphql/queries"
import { listTravellers } from '../graphql/queries';
class LoginEntry extends React.Component{
    nextStep = (data) =>{
        this.props.dispatch(nextStep('login',data));
    }

    render() {
        const step = store.getState().loginflow;
        switch(step){
            case 0:
                return (
                    <TodayForm nextStep={this.nextStep}/>
                )
            case 1:
                return (
                    <Redirect to='/home'/>
                        )
            default:
                return "Invalid login phase of : " +step

        }
    }

}

const mapStateToProps = (state) => ({loginflow: state.loginflow});
export default connect(mapStateToProps)(LoginEntry);
