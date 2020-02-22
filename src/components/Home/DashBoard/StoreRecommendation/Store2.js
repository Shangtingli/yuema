
import React from "react"
import {Card, Collapse, Popover} from "antd"
import CommentsPopOver from "./CommentsPopOver"
import AddCommentPopOver from "./AddCommentPopOver"

const { Panel } = Collapse;
class Store2 extends React.Component{


    render(){
        const data = this.props.data;

        return(
            <Card title={data.storeName} key={data.storeName} bordered={true} className="store-card">
                <p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>
                <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
                <p>Exact Location (lat,lng):{`${data.lat},${data.lng}`} </p>
                <CommentsPopOver store={data} traveller={this.props.traveller}/>
                <AddCommentPopOver traveller={this.props.traveller} store={data}/>
            </Card>
        )
    }
}

export default Store2;