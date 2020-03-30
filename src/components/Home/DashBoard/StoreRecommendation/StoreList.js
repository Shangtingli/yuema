import React from "react"
import {STORES_EACH_PAGE} from "../../../Constants"
import {Pagination} from "antd"
import Store from "./Store"
import {getRandomInt} from "../../../Util";

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

    createStores = (dataEnumeration) => {
        const data = dataEnumeration[0];
        const number = dataEnumeration[1];
        return <Store
            data={data}
            key={data.storeName}
            traveller={this.props.traveller}
            filterStoreData={this.filterStoreData}
            favorite={this.props.favorite}
            location={this.props.location}
            imageNumber={number}
        />
    }
    onChange = (e) => {
        this.setState({currPage: e});
    }

    render() {
        // const states = store.getState();
        const start = this.state.currPage;
        const storeData = this.props.storeData;

        const storePageData = storeData.slice((start - 1) * STORES_EACH_PAGE, start * STORES_EACH_PAGE);
        const storeEntries = []
        for (let i=0; i<storePageData.length; ++i){
            const number = getRandomInt(11);
            storeEntries.push([storePageData[i],number]);
        }
        // const totalPage = storeData.length/STORES_EACH_PAGE + (storeData.length % STORES_EACH_PAGE === 0 ? 0: 1);

        return (
            <div style={styles.storesContainer}>
                <div style={styles.storePage}>
                {storeEntries.map(this.createStores)}
                </div>
                <Pagination defaultCurrent={this.state.currPage} total={storeData.length} defaultPageSize={STORES_EACH_PAGE} onChange={this.onChange}/>
            </div>
        )


    }
}


export default StoreList;

const styles = {
    storePage: {
        height: "550px",
        width: "1000px",
        display: 'flex'
    },
    storesContainer:{
        height: "650px",
        width: "1000px",
        margin:"auto"
    }
}