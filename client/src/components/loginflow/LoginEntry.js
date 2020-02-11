import React from 'react';
import LoginForm from './LoginForm';
import TodayForm from "./TodayForm";
import {connect} from 'react-redux';
import store from '../../store';
import { nextStep,prevStep } from '../../actions/index';
import {Redirect} from "react-router"

class LoginEntry extends React.Component{
    nextStep = (data) =>{
        this.props.dispatch(nextStep('login',data));
    }

    prevStep = (data) => {
        this.props.dispatch(prevStep('login',data));
    }

    render() {
        const step = store.getState().loginflow;
        switch(step){
            case 0:
                return (
                    <LoginForm nextStep={this.nextStep}/>
                )
            case 1:
                return (
                    <TodayForm prevStep={this.prevStep}/>
                )
            case 2:
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
