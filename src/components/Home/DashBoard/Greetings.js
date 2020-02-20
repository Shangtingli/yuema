import * as React from "react"
import store from '../../../store';
import {connect } from 'react-redux';
class Greetings extends React.Component{
    render(){
        const states = store.getState();
        const firstName = states.firstName;
        const lastName = states.lastName;
        const greetings = `Hello, ${firstName} ${lastName}`;
        if (firstName === ''){
            return null;
        }
        else{
            return(
                <div className="navbar-greetings"> <h2> {greetings}</h2></div>
            )
        }

    }
}

const mapStateToProps = (state) =>({firstName: state.firstName, lastName: state.lastName});
export default connect(mapStateToProps)(Greetings);
