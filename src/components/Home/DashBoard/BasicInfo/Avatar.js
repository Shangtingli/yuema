import React from 'react';
import {Storage} from 'aws-amplify';
import {Icon} from "antd";
import PropTypes from 'prop-types';

export default class Avatar extends React.Component{

    state = {
        avatarUrl:null
    }

    componentDidMount(){
        if (this.props.avatarKey ===null){
            Storage.get("s3/avatars/defaultAvatar.png").then((url) => {
                this.setState({avatarUrl :url});
            })
        }
        else{
            Storage.get(this.props.avatarKey).then((url) => {
                this.setState({avatarUrl :url});
            })
        }
    }

    render(){
        if (this.state.avatarUrl === null){

            return <Icon type="sync" spin className='spin-icon'/>
        }
        else{
            const style = {width:`${this.props.width}`,height:`${this.props.height}`};
            return(
                <img src={this.state.avatarUrl} style={style}/>
            )
        }

    }

}

Avatar.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    avatarKey: PropTypes.string
};