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
        this.props.dispatch(nextStep(1));
    }

    prevStep = () => {
        this.props.dispatch(prevStep(1));
    }

    render() {
        const step = store.getState();
        switch(step){
            case 1:
                return (
                    <RegistrationForm nextStep={this.nextStep}/>
                )
            case 2:
                return (
                    <CharacteristicsForm prevStep={this.prevStep}/>
                )
            default:
                return "Invalid Step " + step;
        }
    }

}

export default connect()(RegistrationEntry);