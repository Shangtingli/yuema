import React from "react"
import {STORES_EACH_PAGE,COMMENTS_EACH_PAGE} from "../../../Constants"
import {Pagination} from "antd"
import Store from "./Store"

class StoreList extends React.Component{

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
        const storePageData = storeData.slice((start - 1) * STORES_EACH_PAGE, start * STORES_EACH_PAGE);

        return (
            <div>
                {storePageData.map(this.createStores)}
                <Pagination defaultCurrent={this.state.currPage} total={9} defaultPageSize={STORES_EACH_PAGE} onChange={this.onChange}/>
            </div>
        )


    }
}

export default StoreList;