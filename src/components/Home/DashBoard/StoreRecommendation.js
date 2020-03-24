import * as React from "react"
import {writeStoresFromDatabase} from "../../../actions"
import {API, graphqlOperation} from 'aws-amplify';
import {listStores} from "../../../graphql/queries";
import store from '../../../store';
import StoreLoading from "./StoreRecommendation/StoreLoading"
import {connect} from "react-redux"
import StoreList from "./StoreRecommendation/StoreList"
import '../../../styles/styles.scss';

class StoreRecommendation extends React.Component{


    componentDidMount(){
        const states = store.getState();



        const dataToMLService = {};
        dataToMLService['flag'] = true;
        dataToMLService['gender'] = states.sex;
        dataToMLService['country'] = states.country;
        dataToMLService['categories'] = states.hobbies;
        dataToMLService['age_range'] = states.ageRange;
        dataToMLService['location'] = {};
        dataToMLService['location']['lat'] = states.lat;
        dataToMLService['location']['long'] = states.long;
        dataToMLService['favorites'] = Array.from(states.favorites);

        const readyTogoData = JSON.stringify(dataToMLService);

        /**
         * TODO: Debugger here to see the store recommendation data
         */
        API.graphql(graphqlOperation(listStores)).then((response) =>{
            /**
             * Insert Store Recommendation Here!!!
             */
            const allStoreData = response.data.listStores.items;

            const favoriteStoreData = [];
            const notFavoriteStoreData = [];
            for (let store of allStoreData){

                if (states.favorites.has(store.id) === false){
                     notFavoriteStoreData.push(store)
                }
                else{
                    favoriteStoreData.push(store);
                }
            }
            this.props.dispatch(writeStoresFromDatabase(favoriteStoreData,notFavoriteStoreData));
        });
    }

    render(){
        const states = store.getState();
        if (states.favoriteStoreData === null && states.notFavoriteStoreData === null){
            return <StoreLoading/>
        }
        else{
            return(
                <div>
                    <div className="stores-dashboard-content-container">
                        <h2 style={{marginBottom: "20px"}}> Some interesting stores you might like: </h2>
                        <StoreList storeData={states.notFavoriteStoreData} traveller={this.props.traveller} location={this.props.location} favorite={false}/>
                    </div>

                    <div className="stores-dashboard-content-container">
                        <h2 style={{marginBottom: "20px"}}> Your Favorite Places: </h2>
                        <StoreList storeData={states.favoriteStoreData} traveller={this.props.traveller} location={this.props.location} favorite={true}/>
                    </div>
                </div>




            );
        }

    }
}

const mapStateToProps = (state) => ({favoriteStoreData: state.favoriteStoreData, notFavoriteStoreData: state.notFavoriteStoreData});

export default connect(mapStateToProps)(StoreRecommendation);