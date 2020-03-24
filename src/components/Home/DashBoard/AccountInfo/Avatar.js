import React from 'react';
import {Storage} from 'aws-amplify';
import {Icon} from "antd";

export default class Avatar extends React.Component{

    state = {
        avatarUrl:null
    }

    componentDidMount(){
        Storage.get(this.props.avatarKey).then((url) => {
          this.setState({avatarUrl :url});
        })
    }

    render(){
        if (this.state.avatarUrl === null){

            return <Icon type="sync" spin className='spin-icon'/>
        }
        else{
            return(
                <img src={this.state.avatarUrl} style={{width:"100px",height:"100px"}}/>
            )
        }

    }

}