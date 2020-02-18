import React from 'react';
import '../styles/App.css';

import Home from "./Home";
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import {connect} from "react-redux"

Amplify.configure(aws_exports);

/**
 * TODO: Connect API With Front End, Establish the pipeline
 *       Figure out how GraphQL Custom Query Works
 */
class App extends React.Component{
    render(){
        return (<Home/>)
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: true });
