import React from "react"
import {connect} from "react-redux"
import {API, graphqlOperation} from 'aws-amplify';
import {listStores} from "../../../../graphql/queries";
import store from '../../../../store';
import StoreLoading from "./StoreLoading"
import {writeStoresFromDatabase} from "../../../../actions"
import Store from "./Store"
class StoreList extends React.Component{


    componentDidMount(){
        API.graphql(graphqlOperation(listStores)).then((response) =>{
            this.props.dispatch(writeStoresFromDatabase(response.data.listStores.items))
        });
    }
    render(){
        const states = store.getState();
        if (states.storeData === null){
            return <StoreLoading/>
        }
        else{
            return(
                <div className="store-list-container">
                    {states.storeData.map((data) => {return <Store data={data}/>})}
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({storeData: state.storeData})
export default connect(mapStateToProps)(StoreList);
