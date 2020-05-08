import * as React from "react"
import {writeStoresFromDatabase} from "../../../actions"
import {API, graphqlOperation} from 'aws-amplify';
import {listStores} from "../../../graphql/queries";
import store from '../../../store';
import LoadingCard from "../../Loadings/LoadingCard"
import {connect} from "react-redux"
import StoreList from "./StoreRecommendation/StoreList"
import '../../../styles/styles.scss';
import {MAX_STORES_LISTED, STORE_API} from "../../Constants";

class StoreRecommendation extends React.Component{


    componentDidMount(){
        const states = store.getState();
        const dataToMLService = {};
        dataToMLService['Flag'] = "False";
        dataToMLService['Gender'] = states.sex;
        dataToMLService['Country'] = states.country;
        // debugger;
        dataToMLService['Category'] = states.hobbies[0];
        dataToMLService['Age_range'] = states.ageRange;
        dataToMLService['Location'] = {};
        dataToMLService['Location']['Lat'] = states.lat;
        dataToMLService['Location']['Lon'] = states.long;
        dataToMLService['Favorite'] = Array.from(states.favorites);

        const readyTogoData = JSON.stringify(dataToMLService);

        debugger;


        fetch(STORE_API,{
            method:"post",
            body: readyTogoData,
        }).then((response)=>{
            return response.json();
        }).then((storeNames)=>{
            API.graphql(graphqlOperation(listStores,{limit: MAX_STORES_LISTED})).then((response)=>{
                const allStoreData = response.data.listStores.items;
                const chosenStoreData = [];
                for (let store of allStoreData){
                    if (storeNames.includes(store.storeName)){
                        chosenStoreData.push(store);
                    }
                }
                const favoriteStoreData = [];
                const notFavoriteStoreData = [];
                for (let store of chosenStoreData){
                    if (states.favorites.has(store.id) === false){
                        notFavoriteStoreData.push(store)
                    }
                    else{
                        favoriteStoreData.push(store);
                    }
                }
                this.props.dispatch(writeStoresFromDatabase(favoriteStoreData,notFavoriteStoreData));

            })
        })
        // /**
        //  * TODO: Debugger here to see the store recommendation data
        //  */
        // API.graphql(graphqlOperation(listStores,{limit: MAX_STORES_LISTED})).then((response) =>{
        //     /**
        //      * Insert Store Recommendation Here!!!
        //      */
        //     const allStoreData = response.data.listStores.items;
        //
        //     const favoriteStoreData = [];
        //     const notFavoriteStoreData = [];
        //     for (let store of allStoreData){
        //         if (states.favorites.has(store.id) === false){
        //              notFavoriteStoreData.push(store)
        //         }
        //         else{
        //             favoriteStoreData.push(store);
        //         }
        //     }
        //     this.props.dispatch(writeStoresFromDatabase(favoriteStoreData,notFavoriteStoreData));
        // });
    }

    render(){
        const states = store.getState();
        if (states.favoriteStoreData === null && states.notFavoriteStoreData === null){
            return <LoadingCard/>
        }
        else{
            return(
                <div>
                    <div className="stores-dashboard-content-container">
                        <h2 style={{marginBottom: "20px",color:"white"}}> Some interesting stores you might like: </h2>
                        <StoreList storeData={states.notFavoriteStoreData} traveller={this.props.traveller} location={this.props.location} favorite={false}/>
                    </div>

                    <div className="stores-dashboard-content-container">
                        <h2 style={{marginBottom: "20px",color:"white"}}> Your Favorite Places: </h2>
                        <StoreList storeData={states.favoriteStoreData} traveller={this.props.traveller} location={this.props.location} favorite={true}/>
                    </div>
                </div>




            );
        }

    }
}

const mapStateToProps = (state) => ({favoriteStoreData: state.favoriteStoreData, notFavoriteStoreData: state.notFavoriteStoreData});

export default connect(mapStateToProps)(StoreRecommendation);