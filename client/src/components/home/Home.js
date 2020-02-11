import React from 'react';
import store from '../../store';
import { Redirect } from "react-router"
class Home extends React.Component{
    render(){
        const data = store.getState();
        debugger;
        if (data.isLoggedIn){
            return(
                <div>
                    User data to deal with: <br/>
                    Email: {data.email} <br/>
                    Sexual Orientation: {data.sexualOrien} <br/>
                    Flight Time: {data.flightTime} <br/>
                    Flight Destination : {data.flightDest} <br/>
                    NickName: {data.nickname} <br/>
                    PhoneNumber: {data.phonenumber} <br/>
                </div>
            );
        }
        else{
            return (<Redirect to="/" />);
        }

    }
}

export default Home;