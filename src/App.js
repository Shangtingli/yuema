import React from 'react';
import './styles/App.scss';

import { withAuthenticator } from 'aws-amplify-react';
import Amplify,{Storage} from 'aws-amplify';
import aws_exports from './aws-exports';
import {connect} from "react-redux"
import Home from "./components/Home/Home"
import ImageUpload from "./components/Forms/ImageUpload"
import {Button} from "antd"

/**
 * Add Storage For Avatars, Store Image and other things
 */
Amplify.configure(aws_exports);

class App extends React.Component{

    handleOnClick = () => {
        // const url = document.getElementsByClassName('avatar-real')[0].getAttribute('src');
        Storage.put('example.png', '/Users/shangtingli/Desktop/PROJECT/YUEMA/amplify-yuema/src/assets/background.jpeg', {
            contentType: 'image/png'
        }).then (result => console.log(result))
    }

    get = () => {
        Storage.get('example.png')
            .then(result => console.log(result))
    }
    render(){
        return <Home/>;
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});
