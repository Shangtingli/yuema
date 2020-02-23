import React from 'react';
import './styles/App.scss';

import { withAuthenticator } from 'aws-amplify-react';
import Amplify,{Storage} from 'aws-amplify';
import aws_exports from './aws-exports';
import {connect} from "react-redux"
import Home from "./components/Home/Home"
import TagsInput from "./components/Home/DashBoard/Admin/TagsInput";



/**
 * Add Storage For Avatars, Store Image and other things
 */
Amplify.configure(aws_exports);

class App extends React.Component{
    render(){
        return <Home/>;
        // return <TagsInput/>
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});