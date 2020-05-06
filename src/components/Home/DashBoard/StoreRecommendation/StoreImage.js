import React from 'react';
import {Icon} from "antd"
import {Storage} from 'aws-amplify';

export default class StoreImage extends React.Component{

    state = {
        imageUrl:null
    }

    componentDidMount(){
        /**
         * TODO: Huyufei, change this function to change image to the correct ones
         * @type {string}
         */
        const key = `s3/store_images/default_images/${this.props.imageIndex}.jpg`;

        Storage.get(key).then((url) => {
            this.setState({imageUrl:url});
        })
    }
    render(){

        if (this.state.imageUrl === null){
            return (
                <div>
                    <Icon type="sync" spin className='spin-icon'/>
                </div>
            )
        }

        else{
            return(
                <div>
                    <img src={this.state.imageUrl} width={`200px`} height={`112px`}/>
                </div>
            )
        }


    }
}