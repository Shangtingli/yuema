import React from 'react';
import LoginForm from './LoginForm';
import CharacteristicsForm from "./CharacteristicsForm";
import {connect} from 'react-redux';
import store from '../../store';
import { nextStep,prevStep } from '../../actions';

class LoginEntry extends React.Component{
    nextStep = (data) =>{
        this.props.dispatch(nextStep('login',data));
    }

    prevStep = (data) => {
        this.props.dispatch(prevStep('login',data));
    }

    render() {
        const step = store.getState().loginflow;
        if (step === 'login') {
            return (
                <LoginForm nextStep={this.nextStep}/>
            )
        }
        else if (step === 'characteristics') {
            return (
                <CharacteristicsForm prevStep={this.prevStep}/>
            )
        }
        else{
            return "Invalid Step of " + step;
        }
    }

}

const mapStateToProps = (state) => ({loginflow: state.loginflow});
export default connect(mapStateToProps)(LoginEntry);
