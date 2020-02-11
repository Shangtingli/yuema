import React from 'react';
import store from '../../store';
import { Redirect } from "react-router"
import AccountInfo from "./AccountInfo"
class Home extends React.Component{
    render(){
        const data = store.getState();
        debugger;
        if (data.isLoggedIn){
            return(
                <AccountInfo/>
            );
        }
        else{
            return (<Redirect to="/" />);
        }

    }
}

export default Home;