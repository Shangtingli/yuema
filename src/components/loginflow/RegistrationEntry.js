import React from 'react';
import RegistrationForm from './RegistrationForm';
import CharacteristicsForm from "./CharacteristicsForm";
import {connect} from 'react-redux';
import store from '../../store';
import { prevStep,nextStep } from '../../actions';

class RegistrationEntry extends React.Component{

    constructor(props){
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }
    nextStep = () =>{
        this.props.dispatch(nextStep('register'));
    }

    prevStep = () => {
        this.props.dispatch(prevStep('register'));
    }

    render() {
        const step = store.getState().loginpage;
        switch(step){
            case "register":
                return (
                    <RegistrationForm nextStep={this.nextStep}/>
                )
            case "characteristics":
                return (
                    <CharacteristicsForm prevStep={this.prevStep}/>
                )
            default:
                return "Invalid Step " + step;
        }
    }

}

export default connect()(RegistrationEntry);