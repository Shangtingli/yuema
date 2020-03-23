
import React from "react"
import {Button, Card, Collapse, Popover, Tag} from "antd"
import CommentsPopOver from "./CommentsPopOver"
import AddCommentPopOver from "./AddCommentPopOver"
import {API, graphqlOperation} from 'aws-amplify';
import {updateTraveller} from "../../../../graphql/mutations"
import {addFavorite, removeFavorite} from "../../../../actions"
import {connect} from "react-redux"
import {COLOR_SCHEMES} from "../../../Constants";
import {distance} from "../../../Util";

const { Panel } = Collapse;
class Store extends React.Component{

    createTag = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];
        return <Tag color={COLOR_SCHEMES[index]} key={tag}> {tag}</Tag>
    }

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

        const favorites = new Set(traveller.favorites);
        favorites.add(storeId);

        traveller.favorites = Array.from(favorites);

        API.graphql(graphqlOperation(updateTraveller,{input:traveller})).then((response) => {
            this.props.dispatch(addFavorite(storeId))
        });
    }

    handleRemove(e){
        const storeId = this.data.id;
        const traveller = this.traveller;
        const favorites = new Set(traveller.favorites);
        favorites.delete(storeId);
        traveller.favorites = Array.from(favorites);

        API.graphql(graphqlOperation(updateTraveller,{input:traveller})).then((response) => {
            this.props.dispatch(removeFavorite(storeId));
        });

    }
    render(){
        const data = this.data;
        const tags = data.tags;
        const traveller = this.props.traveller;
        const location = this.props.location;

        const currentLat = location.lat;
        const currentLong = location.long;
        const storeLat = data.lat;
        const storeLong = data.long;
        debugger;
        const kilometers = distance(currentLat,currentLong,storeLat,storeLong,"K");

        const tags_entries = []
        for (let i=0; i<tags.length; ++i){
            tags_entries.push([i,tags[i]]);
        }
        return(
            <Card title={data.storeName} key={data.storeName} bordered={true} className="store-card" style={{width: "300px"}}>
                <img src={`helloworld.com`} width={`200px`} height={`200px`}/>

                {/*<p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>*/}
                <div>
                    {tags_entries.map(this.createTag)}
                </div>
                <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
                <p> {`Distance: ${kilometers} km`} </p>
                <CommentsPopOver store={data} traveller={traveller}/>
                <AddCommentPopOver traveller={traveller} store={data}/>
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