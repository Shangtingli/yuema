import React from 'react';
import {Storage} from 'aws-amplify';
import Loading from "../Loading"

export default class Avatar extends React.Component{

    state = {
        avatarUrl:null
    }

    componentDidMount(){
        Storage.get(this.props.avatarKey).then((url) => {
            debugger;
          this.setState({avatarUrl :url});
        })
    }

    render(){
        if (this.state.avatarUrl === null){
            return <Loading/>
        }
        else{
            debugger;
            return(
                <img src={this.state.avatarUrl} style={{width:"100px",height:"100px"}}/>
            )
        }

    }

}