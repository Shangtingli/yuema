import * as React from "react"
import {Icon} from "antd"
import '../../../styles/home/loading.scss';
export default class Loading extends React.Component{

    render(){
        return(
            <div className='loading-container'>
                <div> <h3> Please wait. We are retrieving your data: </h3></div>
                <Icon type="sync" spin className='spin-icon'/>
            </div>
        )
    }
}