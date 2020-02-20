import React from "react"
import {Card} from "antd"

class Store extends React.Component{

    render(){
        const data = this.props.data;
        return(
            <Card style={{ width: 400 }} className="store-card">
                <strong> {data.storeName}</strong>
                <p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>
                <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
            </Card>
        )
    }
}

export default Store;