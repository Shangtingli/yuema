import React from 'react';
import {Icon} from "antd"
import {Storage} from 'aws-amplify';

export default class StoreImage extends React.Component{
    state = {
        imageUrl:null
    }

    componentDidMount(){
        const key = `store_images/image${this.props.imageNumber}.png`;

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
                    <img src={this.state.imageUrl} width={`200px`} height={`200px`}/>
                </div>
            )
        }


    }
}