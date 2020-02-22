import React from 'react';
import './styles/App.scss';

import { withAuthenticator } from 'aws-amplify-react';
import Amplify,{Storage} from 'aws-amplify';
import aws_exports from './aws-exports';
import {connect} from "react-redux"
import Home from "./components/Home/Home"
import HobbyForm2 from "./components/Forms/HobbyForm2";

/**
 * Add Storage For Avatars, Store Image and other things
 */
Amplify.configure(aws_exports);

class App extends React.Component{
    render(){
        return <Home/>;
        // return <HobbyForm2/>;
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});