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
        var a = store;
        debugger;
        this.props.dispatch(nextStep(0));
        a = store;
        debugger;
    }

    prevStep = () => {
        this.props.dispatch(prevStep(0));
    }

    render() {
        const step = store.getState();
        debugger;
        switch(step){
            case 0:
                return (
                    <LoginForm nextStep={this.nextStep}/>
                )
            case 2:
                return (
                    <CharacteristicsForm prevStep={this.prevStep}/>
                )
            default:
                return ("Invalid step of " + step);
        }
    }

}

export default connect()(LoginEntry);
