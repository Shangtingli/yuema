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
    render(){
        return <Home/>;
    }
}

export default withAuthenticator(connect()(App), { includeGreetings: false});
// Amplify.configure(aws_exports);
//
// export default class App extends React.Component {
//     onChange(e) {
//         const file = e.target.files[0];
//         Storage.put('example.png', file, {
//             contentType: 'image/png'
//         })
//             .then ((result) => {debugger;console.log("Result: " + result)})
//             .catch(err => console.log(err));
//     }
//
//     handleOnClick = (e) => {
//         Storage.get('example.png')
//             .then(result => console.log(result))
//             .catch(err => console.log(err));
//     }
//
//     render() {
//         return (
//             <div>
//                 {/*<ImageUpload/>*/}
//             <input
//                 type="file" accept='image/png'
//                 onChange={(e) => this.onChange(e)}
//             />
//                 {/*<button onClick={this.onChange}> Upload </button>*/}
//                 <button onClick={this.handleOnClick}> Click Me</button>
//             </div>
//         )
//     }
// }