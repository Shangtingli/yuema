import React from "react"
import {STORE_EACH_PAGE} from "../../../Constants"
import {Pagination} from "antd"
import store from "../../../../store"
import Store from "./Store"

class StoreList2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currPage:1,
        };
    }


    createStores = (data) => {

        return <Store data={data} key={data.storeName} traveller={this.props.traveller}/>
    }
    onChange = (e) => {
        this.setState({currPage: e});
    }

    render() {
        // const states = store.getState();
        const start = this.state.currPage;
        const storeData = this.props.storeData;
        const storePageData = storeData.slice((start - 1) * STORE_EACH_PAGE, start * STORE_EACH_PAGE);

        return (
            <div>
                {storePageData.map(this.createStores)}
                <Pagination defaultCurrent={this.state.currPage} total={9} defaultPageSize={STORE_EACH_PAGE} onChange={this.onChange}/>
            </div>
        )


    }
}

export default StoreList2;