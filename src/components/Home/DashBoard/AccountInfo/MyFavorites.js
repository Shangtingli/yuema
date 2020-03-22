import React from 'react';
import {connect} from "react-redux"
import {API, graphqlOperation} from 'aws-amplify';
import store from '../../../../store';
import {listStores, listTravellers} from "../../../../graphql/queries"
import {writeFavoriteStoresFromDatabase} from "../../../../actions"
import StoreLoading from "../StoreRecommendation/StoreLoading"
import Store from "../StoreRecommendation/Store"
import StoreList from "../StoreRecommendation/StoreList"

class MyFavorite extends React.Component{

    componentDidMount(){
        const states = store.getState();
        const favorites = states.favorites;
        API.graphql(graphqlOperation(listStores)).then((response) => {
            const all_stores= response.data.listStores.items;
            const favorite_stores = [];
            for (let store of all_stores){
                if (favorites.includes(store.id)){
                    favorite_stores.push(store);
                }
            }

            this.props.dispatch(writeFavoriteStoresFromDatabase(favorite_stores));
        });
    }

    render(){
        const states = store.getState();
        const favoriteStoreData = states.favoriteStoreData;
        if (favoriteStoreData === null){
            return <StoreLoading/>
        }
        else{

            return(
                <StoreList storeData={favoriteStoreData} traveller={this.props.traveller} favorite={true}/>
            )
        }

    }
}

const mapStateToProps = (state) => ({favorites : state.favorites, favoriteStoreData: state.favoriteStoreData})
export default connect(mapStateToProps)(MyFavorite);