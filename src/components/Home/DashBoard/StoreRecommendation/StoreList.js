import React from "react";
import {connect} from "react-redux";
import {API, graphqlOperation} from 'aws-amplify';
import {listStores} from "../../../../graphql/queries";
import store from '../../../../store';
import StoreLoading from "./StoreLoading";
import {writeStoresFromDatabase} from "../../../../actions";
import Store from "./Store";
import {Collapse} from "antd";
import 'antd/dist/antd.css';

const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}

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
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    {states.storeData.map((data) => {
                        debugger;
                        return(
                        <Panel header={data.storeName} key={data.storeName}>
                            <p>Tags : {data.tags.map((tag) => {return `${tag} || `})}</p>
                            <p>At {`Terminal ${data.terminal} Floor ${data.floor}`}</p>
                            <p>Exact Location (lat,lng):{`${data.lat},${data.lng}`} </p>
                        </Panel>
                    )})}
                </Collapse>
            )
        }

    }
}

const mapStateToProps = (state) => ({storeData: state.storeData})
export default connect(mapStateToProps)(StoreList);
