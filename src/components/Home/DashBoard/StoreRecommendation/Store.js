import React from "react"
import {Collapse, Popover} from "antd"
import CommentsPopOver from "./CommentsPopOver"
import AddCommentPopOver from "./AddCommentPopOver"

const { Panel } = Collapse;
class Store extends React.Component{

    render(){
        const data = this.props.data;

        return(
            <Collapse>
                <Panel header={data.storeName} key={data.storeName}>
                    <p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>
                    <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
                    <p>Exact Location (lat,lng):{`${data.lat},${data.lng}`} </p>
                    <CommentsPopOver store={data}/>
                    <AddCommentPopOver traveller={this.props.traveller} store={data}/>
                </Panel>
            </Collapse>
        )
    }
}

export default Store;