import React from "react"
import {Card,Collapse} from "antd"

const { Panel } = Collapse;
class Store extends React.Component{

    render(){
        const data = this.props.data;
        return(
            <Panel header={data.storeName} key={data.storeName}>
                <p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>
                <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
                <p>Exact Location (lat,lng):{`${data.lat},${data.lng}`} </p>
            </Panel>
        )


    }
}

{/*<Card style={{ width: 400 }} className="store-card">*/}
{/*<strong> {data.storeName}</strong>*/}
{/*<p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>*/}
{/*<p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>*/}
{/*</Card>*/}
export default Store;