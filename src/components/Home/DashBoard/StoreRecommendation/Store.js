import React from "react"
import {Button, Card, Tag, Typography} from "antd"
import CommentsPopOver from "./CommentsPopOver"
import AddCommentPopOver from "./AddCommentPopOver"
import {API, graphqlOperation} from 'aws-amplify';
import {updateTraveller} from "../../../../graphql/mutations"
import {addFavorite, removeFavorite} from "../../../../actions"
import {connect} from "react-redux"
import {CHATROOM_HOST, CHATROOM_PORT, COLOR_SCHEMES} from "../../../Constants";
import {distance} from "../../../Util";
import StoreImage from "./StoreImage"


const {Title} = Typography;

class Store extends React.Component{

    createTag = (entry) => {
        const index = entry[0] % COLOR_SCHEMES.length;
        const tag = entry[1];
        return <Tag color={"rgb(41,191,214)"} key={tag}> {tag}</Tag>
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

    handleChat = (e) => {
        e.preventDefault();
        const storeURL = CHATROOM_HOST + ":" + CHATROOM_PORT + "/room/" +   this.data.storeName;
        window.open(storeURL, "_blank");
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

        const kilometers = distance(currentLat,currentLong,storeLat,storeLong,"K");
        const actual_number = kilometers < 1 ? (Math.floor((kilometers * 1000) * 100)) / 100 : Math.floor(kilometers * 100) / 100;
        const actual_unit = kilometers < 1 ? 'm' : 'km';
        const tags_entries = []
        for (let i=0; i<tags.length; ++i){
            tags_entries.push([i,tags[i]]);
        }
        const title = <Title level={3} style={{color:"white"}}>{data.storeName}</Title>;
        return (
            <Card title={title} key={data.storeName} bordered={true} className="store-card" style={styles.card}>
                <StoreImage imageIndex={data.storeName}/>
                <br/>

                <div>
                    {tags_entries.map(this.createTag)}
                </div>
                <br/>
                <p> <strong> At {`Terminal ${data.terminal} Floor ${data.floor}`} </strong></p>
                <p> <strong> {`Distance: ${actual_number} ${actual_unit}`} </strong></p>
                    <Button onClick={this.handleChat} type={"primary"}> Enter Chat Room </Button>

                <CommentsPopOver store={data} traveller={traveller}/>
                <AddCommentPopOver traveller={traveller} store={data}/>

                {
                    this.props.favorite ?
                        <Button onClick={this.handleRemove} type={"primary"}> Remove </Button> :
                        <Button onClick={this.handleFavorite} type={"primary"}> Add To Favorites </Button>
                }
                <br/>

            </Card>
        );
    }
}

export default connect()(Store);

const styles = {
    card:{
        width: "300px",
        height: "550px",
        maxWidth: "300px",
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor:"rgba(255,255,255,0.7)",
    }
}