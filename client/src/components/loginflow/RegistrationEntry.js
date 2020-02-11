import React from 'react';
import RegistrationForm from './RegistrationForm';
import CharacteristicsForm from "./CharacteristicsForm";
import {connect} from 'react-redux';
import store from '../../store';
import {prevStep,  nextStep} from '../../actions/index';

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
        const step = store.getState().registerflow;
        switch(step){
            case 'register':
                return (
                    <RegistrationForm nextStep={this.nextStep}/>
                )
            case 'characteristics':
                return (
                    <CharacteristicsForm prevStep={this.prevStep}/>
                )
            default:
                return "Invalid Step " + step;
        }
    }

}

const mapStateToProps = (state) => ({registerflow: state.registerflow});
export default connect(mapStateToProps)(RegistrationEntry);