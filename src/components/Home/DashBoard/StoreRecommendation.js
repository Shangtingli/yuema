import * as React from "react"
import {STORE_EACH_PAGE} from '../../Constants';
import { Pagination } from 'antd';
import {writeStoresFromDatabase} from "../../../actions"
import {API, graphqlOperation} from 'aws-amplify';
import {listStores} from "../../../graphql/queries";
import store from '../../../store';
import StoreLoading from "./StoreRecommendation/StoreLoading"
import {connect} from "react-redux"
import StoreList2 from "./StoreRecommendation/StoreList2"

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
                    <StoreList2 storeData={states.storeData} traveller={this.props.traveller}/>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({storeData: state.storeData});

export default connect(mapStateToProps)(StoreRecommendation);