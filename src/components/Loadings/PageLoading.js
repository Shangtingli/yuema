import * as React from "react"
import {Icon} from "antd"
import '../../styles/styles.scss';
export default class PageLoading extends React.Component{

    render(){
        return(
            <div className='loading-container'>
                <div> <h2> Please wait. We are retrieving your data: </h2></div>
                <Icon type="sync" spin className='spin-icon'/>
            </div>
        )
    }
}