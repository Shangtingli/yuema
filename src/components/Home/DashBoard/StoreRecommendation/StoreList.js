import React from "react"
import {STORES_EACH_PAGE} from "../../../Constants"
import {Pagination} from "antd"
import Store from "./Store"
import {connect} from "react-redux"

class StoreList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currPage:1,
            storeData: this.props.storeData
        };
    }

    filterStoreData = (storeId) => {
        const newStoreData = []
        for (let data of this.state.storeData){
            if (data.id !== storeId){
                newStoreData.push(data);
            }
        }

        this.setState({storeData: newStoreData});
    }

    createStores = (data) => {
        return <Store data={data} key={data.storeName} traveller={this.props.traveller} filterStoreData={this.filterStoreData} favorite={this.props.favorite}/>
    }
    onChange = (e) => {
        this.setState({currPage: e});
    }

    render() {
        // const states = store.getState();
        const start = this.state.currPage;
        const storeData = this.props.storeData;
        debugger;
        const storePageData = storeData.slice((start - 1) * STORES_EACH_PAGE, start * STORES_EACH_PAGE);
        // const totalPage = storeData.length/STORES_EACH_PAGE + (storeData.length % STORES_EACH_PAGE === 0 ? 0: 1);

        return (
            <div style={{height: "70%", width: "100%"}}>
                <div style={{height: "80%", width: "100%",display: 'flex'}}>
                {storePageData.map(this.createStores)}
                </div>
                <Pagination defaultCurrent={this.state.currPage} total={storeData.length} defaultPageSize={STORES_EACH_PAGE} onChange={this.onChange} style={{display:'inline-block'}}/>
            </div>
        )


    }
}


export default StoreList;