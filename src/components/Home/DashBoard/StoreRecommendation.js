import * as React from "react"
import {writeStoresFromDatabase} from "../../../actions"
import {API, graphqlOperation} from 'aws-amplify';
import {listStores} from "../../../graphql/queries";
import store from '../../../store';
import StoreLoading from "./StoreRecommendation/StoreLoading"
import {connect} from "react-redux"
import StoreList from "./StoreRecommendation/StoreList"

class StoreRecommendation extends React.Component{

    componentDidMount(){
        API.graphql(graphqlOperation(listStores)).then((response) =>{
            const allStoreData = response.data.listStores.items;
            this.props.dispatch(writeStoresFromDatabase(allStoreData));
        });
    }

    render(){
        const states = store.getState();
        if (states.storeData === null){
            return <StoreLoading/>
        }
        else{

            return(
                <div className="dashboard-content-container">
                    <h3> Some interesting stores you might like: </h3>
                    <StoreList storeData={states.storeData} traveller={this.props.traveller}/>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({storeData: state.storeData});

export default connect(mapStateToProps)(StoreRecommendation);