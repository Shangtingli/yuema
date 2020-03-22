
import React from "react"
import {Button, Card, Collapse, Popover} from "antd"
import CommentsPopOver from "./CommentsPopOver"
import AddCommentPopOver from "./AddCommentPopOver"
import {API, graphqlOperation} from 'aws-amplify';
import {updateTraveller} from "../../../../graphql/mutations"
import {addFavorite, removeFavorite} from "../../../../actions"
import {connect} from "react-redux"

const { Panel } = Collapse;
class Store extends React.Component{

    constructor(props){
        super(props);
        this.data = this.props.data;
        this.traveller = this.props.traveller;
        this.handleFavorite = this.handleFavorite.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleFavorite(e){
        const storeId = this.data.id;
        const traveller = this.traveller;
        traveller.favorites.push(storeId);
        API.graphql(graphqlOperation(updateTraveller,{input:traveller})).then((response) => {
            this.props.dispatch(addFavorite(storeId))
        });
    }

    handleRemove(e){
        const storeId = this.data.id;
        const traveller = this.traveller;
        var filtered = traveller.favorites.filter(function(value, index, arr){
            return value != storeId;
        });
        traveller.favorites = filtered;
        API.graphql(graphqlOperation(updateTraveller,{input:traveller})).then((response) => {
            this.props.dispatch(removeFavorite(storeId));
        });

    }
    render(){
        const data = this.data;
        return(
            <Card title={data.storeName} key={data.storeName} bordered={true} className="store-card" style={{width: "300px"}}>
                <img src={`helloworld.com`} width={`200px`} height={`200px`}/>
                <p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>
                <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
                <p>Exact Location (lat,lng):{`${data.lat},${data.long}`} </p>
                <CommentsPopOver store={data} traveller={this.props.traveller}/>
                <AddCommentPopOver traveller={this.props.traveller} store={data}/>
                {
                    this.props.favorite ?
                        <Button onClick={this.handleRemove}> Remove </Button> :
                        <Button onClick={this.handleFavorite}> Add To Favorites </Button>
                }

            </Card>
        )
    }
}

export default connect()(Store);