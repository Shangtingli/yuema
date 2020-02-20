import React from 'react';
import '../styles/App.scss';

import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import {connect} from "react-redux"
import HobbyQuestionaire from "./HobbyQuestionaire"
import Home from "./Home"

Amplify.configure(aws_exports);

class App extends React.Component{
    render(){
        return (<Home/>)
        // return <HobbyQuestionaire/>
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});
