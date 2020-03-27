import React from 'react';
import './styles/styles.scss';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import LoginFormContainer from "./components/Login/LoginFormContainer"



/**
 * Add Storage For Avatars, Store Image and other things
 */
Amplify.configure(aws_exports);

class App extends React.Component{
    render(){
        // return <Home/>;
        return <LoginFormContainer/>;
    }
}

export default App;