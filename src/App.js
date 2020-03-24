import React from 'react';
import './styles/styles.scss';

import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {connect} from "react-redux"
import Home from "./components/Home/Home"



/**
 * Add Storage For Avatars, Store Image and other things
 */
Amplify.configure(aws_exports);

class App extends React.Component{
    // componentDidMount(){
    //     let myInit = {
    //         body: {}, // replace this with attributes you need
    //         headers: {
    //             'Content-Type': 'application/json'
    //         } // OPTIONAL
    //     }
    //
    //     API.post('yuemaRestApi','/content-based/user',myInit).then((response)=>{
    //
    //         this.setState({text:response.statusCode})
    //     })
    // }
    // state = {
    //     text: null
    // }
    render(){
        return <Home/>;
        // return(
        //     <div>
        //         <p>{this.state.text}</p>
        //     </div>
        // )

    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});