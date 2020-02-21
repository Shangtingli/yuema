import React from 'react';
import './styles/App.scss';

import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {connect} from "react-redux"
import Home from "./components/Home/Home"
import Comments from "./components/Home/DashBoard/StoreRecommendation/CommentList";
import StoreRecommendation from "./components/Home/DashBoard/StoreRecommendation"

Amplify.configure(aws_exports);

class App extends React.Component{
    render(){
        return (
                <Home/>

        )
        // return <StoreRecommendation/>;
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});
