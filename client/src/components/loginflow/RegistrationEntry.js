import React from 'react';
import RegistrationForm from './RegistrationForm';
import CharacteristicsForm from "./CharacteristicForm";
import TodayForm from "./TodayForm";
import {connect} from 'react-redux';
import store from '../../store';
import {prevStep,  nextStep} from '../../actions/index';
import {Redirect} from "react-router"

class RegistrationEntry extends React.Component{

    constructor(props){
        super(props);
        this.nextStep = this.nextStep.bind(this);
    }
    nextStep = (data) =>{
        this.props.dispatch(nextStep('register',data));
    }

    render() {
        const step = store.getState().registerflow;
        switch(step){
            case 0:
                return (
                    <RegistrationForm nextStep={this.nextStep}/>
                )
            case 1:
                return (
                    <CharacteristicsForm nextStep={this.nextStep}/>
                )
            case 2:
                return (<TodayForm nextStep={this.nextStep}/>)

            case 3:
                return <Redirect to='/home'/>
            default:
                return "Invalid Step " + step;
        }
    }

}

const mapStateToProps = (state) => ({registerflow: state.registerflow});
export default connect(mapStateToProps)(RegistrationEntry);