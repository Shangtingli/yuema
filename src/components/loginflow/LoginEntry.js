import React from 'react';
import LoginForm from './LoginForm';
import CharacteristicsForm from "./CharacteristicsForm";
import {connect} from 'react-redux';
import store from '../../store';
import { nextStep,prevStep } from '../../actions';

class LoginEntry extends React.Component{

    constructor(props){
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }
    nextStep = () =>{
        debugger;
        this.props.dispatch(nextStep('login'));
        const a = store;
        debugger;
    }

    prevStep = () => {
        this.props.dispatch(prevStep('login'));
    }

    render() {
        const step = store.getState().loginpage;
        debugger;
        switch(step){
            case 'login':
                return (
                    <LoginForm nextStep={this.nextStep}/>
                )
            case 'characteristics':
                return (
                    <CharacteristicsForm prevStep={this.prevStep}/>
                )
            default:
                return ("Invalid step of " + step);
        }
    }

}

export default connect()(LoginEntry);
